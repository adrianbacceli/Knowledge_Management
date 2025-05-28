---
title: 
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
``` powershell
## Run this script on each node using PowerShell ISE 64 bits.

# Get all cluster nodes

$clusterNodes = Get-ClusterNode

# Initialize an array to store results

$resultArray = @()

foreach ($node in $clusterNodes) {

    $nodeName = $node.Name

    # Test Ping

    $pingResult = Test-Connection -ComputerName $nodeName -Count 1 -Quiet

    # Test ports with proper handling

    $port28002 = Test-NetConnection -ComputerName $nodeName -Port 28002 -WarningAction SilentlyContinue

    $port30002 = Test-NetConnection -ComputerName $nodeName -Port 30002 -WarningAction SilentlyContinue

    # Store results in an object

    $resultArray += [PSCustomObject]@{

        Node      = $nodeName

        Ping      = if ($pingResult) { "Reachable" } else { "Unreachable" }

        Port28002 = if ($port28002.TcpTestSucceeded) { "Open" } else { "Closed" }

        Port30002 = if ($port30002.TcpTestSucceeded) { "Open" } else { "Closed" }

    }

}

# Output results as a formatted table

$resultArray | Format-Table -AutoSize
```