---
title: Cycle through folders, get data and act on them
draft: false
tags:
  - Bash
  - Scripting
  - read
  - delete
  - array-of-files
NeedsReview: false
---
# Get folder data from a list of folders

``` bash
#!/bin/bash
# File containing list of folder paths (one per line)
FOLDER_LIST="/tmp/fileslist.txt"

# Ask for the base path
read -rp "Enter the base path: " BASE_PATH

# Check if the file exists
if [[ ! -f "$FOLDER_LIST" ]]; then
  echo "Folder list file '$FOLDER_LIST' not found!"
  exit 1
fi

# Loop through each folder path
while IFS= read -r folder_name; do
 folder="${BASE_PATH%/}/$folder_name"
 if [[ -d "$folder" ]]; then
 file_count=$(find "$folder" -type f | wc -l)
 mod_time=$(stat -c '%y' "$folder")
 echo "Folder: $folder"
 echo "Files: $file_count"
 echo "Date: $mod_time"
 echo "-----------------------------"
 else
         echo "Folder $folder not found or not a directory: $folder"
         echo "-----------------------------"
 fi
done < "$FOLDER_LIST"
```

---
# Get folder data from a list of folders and forcefully delete it 
``` bash
#!/bin/bash
# File containing list of folder paths (one per line)
FOLDER_LIST="/tmp/fileslist.txt"

# Ask for the base path
read -rp "Enter the base path: " BASE_PATH

# Check if the file exists
if [[ ! -f "$FOLDER_LIST" ]]; then
  echo "Folder list file '$FOLDER_LIST' not found!"
  exit 1
fi

# Loop through each folder path
while IFS= read -r folder_name; do
 folder="${BASE_PATH%/}/$folder_name"
        if [[ -d "$folder" ]]; then
                file_count=$(find "$folder" -type f | wc -l)
                mod_time=$(stat -c '%y' "$folder")
                echo "Folder: $folder"
                echo "Files: $file_count"
                echo "Date: $mod_time"
                echo "-----------------------------"
                # Delete all files and subdirectories in the folder
                rm -rf "$folder"
                echo "Deleted folder: $folder"
                echo "-----------------------------"
        else
                echo "Folder $folder not found or not a directory: $folder"
                echo "-----------------------------"
        fi
done < "$FOLDER_LIST"

```


---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
