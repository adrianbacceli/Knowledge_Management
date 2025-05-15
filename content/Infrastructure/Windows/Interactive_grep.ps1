<#
.SYNOPSIS
    Searches VMware ESXi log files for disk-related errors and SCSI sense values.

.DESCRIPTION
    This script recursively scans specified log directories for known disk failure keywords
    and SCSI sense hex patterns. Results are saved to a specified output file.

.NOTES
    Author: Adrian Bacceli
    Date: 2025-05-15
    Version: 1.0
#>

###################### Program Initialization ###################### 
## Include Libraries
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing


## Initialize Variables
# Initialize total match counter
$totalMatches = 0


# Define common disk failure keywords
$enabledKeywords = $true
$keywordMatches = 0
$keywords = @(
    "disk failure",
    "I/O error",
    "read error",
    "write error",
    "disk error",
    "S.M.A.R.T. error",
    "physical element is failing",
    "hard drive failure",
    "smart array controller failure",
    "HDD backplane failure",
    "HDD firmware update error",
    "NMP",
    "APD",
    "PDL",
    "SCSI sense",
    "HBA"
)

# Define regex pattern for SCSI sense values (e.g., 0x5 0x20 0x0)
$regexPattern = '0x[0-9a-fA-F]{2}(?:\s+0x[0-9a-fA-F]{2}){2,}'
$enabledRegex = $false

# Create an empty list to store selected directories
$logDirectories = @()
$filescanned = 0 # -- Not implemented
$global:totalfiles = 0 # -- Not implemented

# # Create an empty list to store skipped zip files
$skippedZips = @()

# To enable zip extraction
$enabledZipExt = $true


# Define output log file path
$logFilePath = "C:\searchtemp\"


# Create the form
$form = New-Object System.Windows.Forms.Form
$form.Text = "Disk Failure Keywords Manager"
$form.Size = New-Object System.Drawing.Size(600, 550)
$form.StartPosition = "CenterScreen"
$form.FormBorderStyle = 'FixedDialog'
$form.MaximizeBox = $false

# ListBox
$listBox = New-Object System.Windows.Forms.ListBox
$listBox.Location = New-Object System.Drawing.Point(20, 20)
$listBox.Size = New-Object System.Drawing.Size(540, 250)
$keywords | ForEach-Object { [void]$listBox.Items.Add($_) }
$form.Controls.Add($listBox)

# TextBox for new keyword
$textBox = New-Object System.Windows.Forms.TextBox
$textBox.Location = New-Object System.Drawing.Point(20, 280)
$textBox.Size = New-Object System.Drawing.Size(420, 25)
$form.Controls.Add($textBox)

# Add Button
$addButton = New-Object System.Windows.Forms.Button
$addButton.Text = "Add"
$addButton.Size = New-Object System.Drawing.Size(100, 25)
$addButton.Location = New-Object System.Drawing.Point(450, 280)
$addButton.Add_Click({
    if ($textBox.Text.Trim() -ne "") {
        $listBox.Items.Add($textBox.Text.Trim())
        $textBox.Clear()
    }
})
$form.Controls.Add($addButton)

# Button Panel
$buttonPanel = New-Object System.Windows.Forms.Panel
$buttonPanel.Location = New-Object System.Drawing.Point(20, 320)
$buttonPanel.Size = New-Object System.Drawing.Size(540, 40)
$form.Controls.Add($buttonPanel)

# Delete Selected
$deleteButton = New-Object System.Windows.Forms.Button
$deleteButton.Text = "Delete Selected"
$deleteButton.Size = New-Object System.Drawing.Size(160, 30)
$deleteButton.Location = New-Object System.Drawing.Point(0, 5)
$deleteButton.Add_Click({
    $selected = @($listBox.SelectedItems)
    foreach ($item in $selected) {
        $listBox.Items.Remove($item)
    }
})
$buttonPanel.Controls.Add($deleteButton)

# Clear All
$clearButton = New-Object System.Windows.Forms.Button
$clearButton.Text = "Clear All"
$clearButton.Size = New-Object System.Drawing.Size(100, 30)
$clearButton.Location = New-Object System.Drawing.Point(180, 5)
$clearButton.Add_Click({
    $listBox.Items.Clear()
})
$buttonPanel.Controls.Add($clearButton)

# Load from File
$loadButton = New-Object System.Windows.Forms.Button
$loadButton.Text = "Load from .txt File"
$loadButton.Size = New-Object System.Drawing.Size(160, 30)
$loadButton.Location = New-Object System.Drawing.Point(300, 5)
$loadButton.Add_Click({
    $fileDialog = New-Object System.Windows.Forms.OpenFileDialog
    $fileDialog.Filter = "Text files (*.txt)|*.txt"
    if ($fileDialog.ShowDialog() -eq "OK") {
        $lines = Get-Content $fileDialog.FileName
        foreach ($line in $lines) {
            if ($line.Trim() -ne "") {
                $listBox.Items.Add($line.Trim())
            }
        }
    }
})
$buttonPanel.Controls.Add($loadButton)

# Regex Checkbox
$regexCheckbox = New-Object System.Windows.Forms.CheckBox
$regexCheckbox.Text = "Enable Regex Pattern"
$regexCheckbox.Location = New-Object System.Drawing.Point(20, 380)
$regexCheckbox.Size = New-Object System.Drawing.Size(200, 20)
$form.Controls.Add($regexCheckbox)

# Regex Pattern TextBox
$regexTextBox = New-Object System.Windows.Forms.TextBox
$regexTextBox.Location = New-Object System.Drawing.Point(220, 378)
$regexTextBox.Size = New-Object System.Drawing.Size(340, 25)
$regexTextBox.Enabled = $false
$form.Controls.Add($regexTextBox)

# Enable/Disable regex textbox based on checkbox
$regexCheckbox.Add_CheckedChanged({
    $regexTextBox.Enabled = $regexCheckbox.Checked
})

# OK Button
$okButton = New-Object System.Windows.Forms.Button
$okButton.Text = "OK"
$okButton.Size = New-Object System.Drawing.Size(100, 30)
$okButton.Location = New-Object System.Drawing.Point(460, 450)
$okButton.Add_Click({
    $form.Tag = @{
        Keywords = @($listBox.Items)
        RegexEnabled = $regexCheckbox.Checked -and ($regexTextBox.Text.Trim() -ne "")
        RegexPattern = $regexTextBox.Text.Trim()
    }
    $form.Close()
})
$form.Controls.Add($okButton)








###################### Interactive Section ###################### 
## Open window to select search folders to define paths to one or more extracted log directories


do {
    $folderBrowser = New-Object System.Windows.Forms.FolderBrowserDialog
    $folderBrowser.Description = "Select a log directory"
    $folderBrowser.ShowNewFolderButton = $false

    # Use a dummy invisible form to make the dialog topmost
    $null = [System.Windows.Forms.Application]::EnableVisualStyles()
    $dummyForm = New-Object System.Windows.Forms.Form
    $dummyForm.TopMost = $true
    $dummyForm.Show()
    $dummyForm.Hide()

    if ($folderBrowser.ShowDialog($dummyForm) -eq [System.Windows.Forms.DialogResult]::OK) {
        $logDirectories += $folderBrowser.SelectedPath
    }

    $result = [System.Windows.Forms.MessageBox]::Show(
        $dummyForm,
        "Do you want to add another folder?",
        "Add Another Folder",
        [System.Windows.Forms.MessageBoxButtons]::YesNo,
        [System.Windows.Forms.MessageBoxIcon]::Question
    )

    $dummyForm.Dispose()
} while ($result -eq [System.Windows.Forms.DialogResult]::Yes)

# Output the selected directories
$logDirectories



# Display selected directories
Write-Host "`nYou selected the following log directories:"
$logDirectories | ForEach-Object { Write-Host "- $_" }

## Show the form to edit keywords
$form.Topmost = $true
$form.Add_Shown({ $form.Activate() })
[void]$form.ShowDialog()

# Save the keywords to the $keywords variable for use in the rest of the script
$result = $form.Tag
$keywords = $result.Keywords
$enabledRegex = $result.RegexEnabled
$regexPattern = $result.RegexPattern

# Determine if keyword search should be enabled
$enabledKeywords = $keywords.Count -gt 0


# Output the keywords
Write-Host "`nFinal list of keywords:"
$keywords | ForEach-Object { Write-Host "- $_" }

# Inform if regex was enabled
Write-Host "`nRegex Enabled: $enabledRegex"
if ($enabledRegex) {
    Write-Host "Regex Pattern: $regexPattern"
}






###################### Execution Section ###################### 

# Clear previous results
Clear-Content -Path $logFilePath -ErrorAction SilentlyContinue

# Clear previous zip extracted files
if (Test-Path $globalTempExtractRoot) {
    Remove-Item -Path "$globalTempExtractRoot\*" -Recurse -Force -ErrorAction SilentlyContinue
}


# Search each directory
foreach ($dir in $logDirectories) {
    Write-Host "`nSearching in: $dir" -ForegroundColor Cyan


    # Ensure the temp extraction directory exists
    $globalTempExtractRoot = "C:\searchtemp"
    if (-not (Test-Path $globalTempExtractRoot)) {
        New-Item -Path $globalTempExtractRoot -ItemType Directory | Out-Null
    }
     if (-not (Test-Path $logFilePath)) {
        New-Item -Path $logFilePath -ItemType Directory | Out-Null
    } else {
        if (-not (Test-Path "$logFilePath\result.txt")) {
            New-Item -Path "$logFilePath\result.txt" -ItemType File | Out-Null
        }
    }

    $zipFiles = @()
    try {
        $zipFiles = Get-ChildItem -Path $dir -Recurse -Filter *.zip -ErrorAction SilentlyContinue
    } catch {
        Write-Host "  ⚠️  Error while scanning for zip files in: $dir" -ForegroundColor Yellow
    }

    foreach ($zip in $zipFiles) {
        try {
            if ($zip.FullName.Length -ge 260 -or $zip.DirectoryName.Length -ge 248) {
                throw "Path too long"
            }

            if ($enabledZipExt -eq $true) {
                $extractPath = Join-Path -Path $globalTempExtractRoot -ChildPath "$($zip.BaseName)_extracted"
                if (-not (Test-Path $extractPath)) {
                    Write-Host "  - Extracting: $($zip.Name) to $extractPath" -ForegroundColor DarkGray
                    Expand-Archive -Path $zip.FullName -DestinationPath $extractPath -Force
                    $logDirectories += $extractPath
                }
            } else {
                Write-Host "  ⚠️  Zip file detected but extraction is disabled: $($zip.FullName)" -ForegroundColor Yellow
                $skippedZips += $zip.FullName
            }
        } catch {
            Write-Host "  ! Skipped zip file: $($zip.FullName) (unsupported long path or error)" -ForegroundColor Red
            $skippedZips += "$($zip.FullName) (skipped: unsupported long path or unreadable)"
            continue
        }
    }
    






    # Keyword search
    if ($enabledKeywords -eq $true) {
        try {
            $files = Get-ChildItem -Path $dir -Recurse -File -ErrorAction SilentlyContinue
            $global:totalfiles = $files.Count
            $filescanned = 0
            Write-Host "Total of $totalfiles files"

            foreach ($file in $files) {
                $global:filescanned++
                try {
                    if ($file.FullName.Length -ge 260 -or $file.DirectoryName.Length -ge 248) {
                        throw "Path too long"
                    }
                } catch {
                    $skippedItems += "$($file.FullName) (skipped: unsupported long path or unreadable)"
                }
            }
        } catch {
            $skippedItems += "$dir (skipped: error during keyword search)"
        }

        
        foreach ($keyword in $keywords) {
            Write-Host "  - Searching for keyword: '$keyword'" -ForegroundColor gray
            $filescanned = 0  # Reset for this keyword
            $totalfiles = $files.Count

            foreach ($file in $files) {
                Start-Sleep -Milliseconds 100
                $filescanned++

                Write-Progress -Activity "Searching for '$keyword'" `
                               -Status "Scanned $filescanned of $totalfiles" `
                               -PercentComplete (($filescanned / $totalfiles) * 100)

                $results = Select-String -Path $file.FullName -Pattern $keyword
                if ($results) {
                    $results | Out-File -Append -FilePath "$logFilePath\result.txt"
                    $keywordMatches += $results.Count
                    $totalMatches += $results.Count
                    Write-Host "    Match found on file $($file.FullName)"
                }
            }

            Write-Host "    Matches for '$keyword': $keywordMatches"
            }
        } else {
        Write-Host "    No Keyword was provided" -ForegroundColor Yellow
    }  
}








    # Regex search
    if ($enabledRegex -eq $true) {
        Write-Host "  - Searching for SCSI sense values (regex)"
        $regexResults = @()

        try {
            $files = Get-ChildItem -Path $dir -Recurse -File -ErrorAction SilentlyContinue
            foreach ($file in $files) {
                try {
                    if ($file.FullName.Length -ge 260 -or $file.DirectoryName.Length -ge 248) {
                        throw "Path too long"
                    }

                    $matches = Select-String -Path $file.FullName -Pattern $regexPattern -AllMatches
                    if ($matches) {
                        $regexResults += $matches
                    }
                } catch {
                    $skippedItems += "$($file.FullName) (skipped: unsupported long path or unreadable)"
                }
            }
        } catch {
            $skippedItems += "$dir (skipped: error during regex search)"
        }

        if ($regexResults.Count -gt 0) {
            $regexResults | Out-File -Append -FilePath $logFilePath
        } else {
            Write-Host "    No results found" -ForegroundColor Red
        
    } else {
        Write-Host "    No Regex was provided" -ForegroundColor Yellow
    }
}




# If extraction is disabled, print the list of skipped zip files
if ($enabledZipExt -ne $true -and $skippedZips.Count -gt 0) {
    Write-Host "`n⚠️  The following zip files were detected but not extracted:" -ForegroundColor Yellow
    $skippedZips | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
}

if (-not ($enabledRegex -or $enabledKeywords)) {
    Write-Host "`nX Search was not setup to find keywords or regex. " -ForegroundColor Red
} else {
    Write-Host "`n✅ Search complete. $totalMatches Results saved to:`n$logFilePath\results" -ForegroundColor Green
}