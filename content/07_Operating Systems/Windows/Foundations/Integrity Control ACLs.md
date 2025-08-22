---
title: Integrity Control ACLs
draft: false
tags:
  - Windows
  - File-Systems
  - ntfs
  - fat32
  - icacls
  - permissions
  - administration
  - Hack-The-Box
  - HTB
  - ACL
NeedsReview: false
---
## Overview

Windows supports multiple file systems, but the most relevant today are FAT32, exFAT, and NTFS. While FAT12 and FAT16 are obsolete, NTFS is the primary file system used by modern Windows systems.

## FAT32 File System

FAT32 (File Allocation Table 32) is a widely supported file system across operating systems and device types.

> [!note]  
> FAT32 uses 32-bit values to identify data clusters.

### Pros

- Broad device compatibility (computers, cameras, consoles, smartphones)
- Works across Windows, macOS, and Linux

### Cons

- Max file size of 4GB
- No built-in file protection or compression
- Requires third-party tools for encryption

## NTFS File System

NTFS (New Technology File System) is the default file system for Windows since NT 3.1.

### Pros

- Reliable with built-in file system recovery features
- Granular security via file and folder permissions
- Supports large partitions
- Journaling logs all file operations

### Cons

- Limited support on mobile and older media devices

## NTFS Permissions

NTFS supports both **basic** and **advanced** permissions:

|Permission Type|Description|
|---|---|
|Full Control|Read, write, change, delete files/folders|
|Modify|Read, write, delete|
|List Folder Contents|View/list folders and subfolders; execute files (folders only)|
|Read and Execute|View/list files and subfolders; execute files|
|Write|Add files and folders, write to files|
|Read|View folder contents and file contents|
|Traverse Folder|Move through folders to reach specific files even without list permissions|

> [!tip]  
> Permissions can be inherited or set explicitly by disabling inheritance.

## Managing Permissions with `icacls`

NTFS permissions can be managed via the GUI or CLI using `icacls`, which offers fine-grained control.

### Viewing Permissions

```shell
icacls c:\windows
```

Example Output:

```
c:\windows NT SERVICE\TrustedInstaller:(F)
             ...
             BUILTIN\Users:(RX)
             ...
Successfully processed 1 files; Failed processing 0 files
```

### Inheritance Flags

- `(CI)`: Container Inherit
- `(OI)`: Object Inherit
- `(IO)`: Inherit Only
- `(NP)`: No Propagate Inherit
- `(I)`: Inherited

### Access Levels

- `F`: Full Access
- `M`: Modify
- `RX`: Read and Execute
- `R`: Read
- `W`: Write
- `N`: No Access
- `D`: Delete

### Modifying Permissions

Grant full control to `joe` on `C:\users`:

```shell
icacls C:\users /grant joe:F
```

Revoke `joe`’s permissions:

```shell
icacls C:\users /remove joe
```

> [!warning]  
> Without `(OI)` and `(CI)` flags, permissions apply only to the directory itself, not its contents.

### Full Documentation

For detailed command-line options, refer to: [https://ss64.com/nt/icacls.html](https://ss64.com/nt/icacls.html)

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
