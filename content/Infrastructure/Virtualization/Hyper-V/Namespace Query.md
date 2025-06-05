---
title: Namespace Query
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
``` powershell
## Backup applications may try to get the list of VMs and UUIDs running WMI queries from the Proxy Node selected to the "root\HypervCluster\v2" namespace.

## All nodes should provide results when the backup software queries it. Sometimes, the collection returns null or empty; which may indicate that this node fails to access the HypervCluster namespace.

## To test if a Windows Hyper-V Node has access to the Cluster Namespace (That acts as the database) root\HypervCluster\v2, you can use on each node: "Get-WmiObject -Query "SELECT  Name, ElementName FROM Msvm_ComputerSystem" -Namespace "root\HypervCluster\v2""

## The following scripts connects to all nodes and tries the query from each node.

## Each node that acts as a proxy node, should return the list of VMs from the "root\HypervCluster\v2" namespace

$clusterNodes = Get-ClusterNode

### PART ONE ###
### This is manual collection of local node where the script is ran

# Since the script attempts to connect to all nodes remotely, this node will not allow to connect remotely to itself, so it is needed to collect VM data for the current node only.

$vmDataCurrentNode = Get-WmiObject -Query "SELECT Name, ElementName FROM Msvm_ComputerSystem" -Namespace "root\HypervCluster\v2" |

    Select-Object Name, ElementName

# This part adds Node name to each entry for current node and prints the table

$vmDataCurrentNode | ForEach-Object {

    $_ | Add-Member -MemberType NoteProperty -Name Node -Value $env:COMPUTERNAME -Force

    $_

} | Format-Table -AutoSize

### PART TWO ###

### This is remote collection of all nodes where the script is ran.

### Note that an error will appear saying that it is not possible to query local node due to HTTP error.

### This is why we ran the manual collection in the first place.

# For loop to connect to each node and run the query

foreach ($node in $clusterNodes) {

    Invoke-Command -ComputerName $node.Name -ScriptBlock {

        $vmData = Get-WmiObject -Query "SELECT Name, ElementName FROM Msvm_ComputerSystem" -Namespace "root\HypervCluster\v2" |

            Select-Object Name, ElementName

        # This part adds Node name to each entry for current node and prints the table

        $vmData | ForEach-Object {

            $_ | Add-Member -MemberType NoteProperty -Name Node -Value $env:COMPUTERNAME -Force

            $_

        }

    } | Format-Table -AutoSize

}
```

