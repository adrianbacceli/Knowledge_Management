---
title: Path Traversal (Directory Traversal)
draft: false
tags:
  - Vulnerability
  - web
  - offensive-security
  - Path-Traversal
  - Directory-Traversal
NeedsReview: true
---
# 🛡️ Path Traversal (Directory Traversal)

> [!info] What is Path Traversal?
> Path traversal is a web security vulnerability that allows an attacker to read (and sometimes write) arbitrary files on the server by manipulating file paths.

## 🧠 How It Works

Applications that construct file paths using user input without proper validation are vulnerable. Attackers exploit this by injecting special path sequences like `../` to traverse directories and access sensitive files.

### 📂 Common Targets

> [!danger] Files at Risk
> - Application source code  
> - Configuration files  
> - Credential files for back-end systems  
> - Operating system files (e.g., `/etc/passwd`, `win.ini`)

## 💬 Example Scenario

A shopping app loads product images using a URL like:
```

html ![](https://m365.cloud.microsoft/loadImage?filename=218.png)

```
Internally, the app reads from:
```

/var/www/images/218.png

```
An attacker modifies the request:
```

https://insecure-website.com/loadImage?filename=../../../etc/passwd

```
This results in the server reading:
```

/var/www/images/../../../etc/passwd

```
> [!note] Why It Works
> The `../` sequence steps up one directory level. Repeating it allows traversal to the root directory and access to sensitive files.

### 🪟 Windows Example

On Windows, both `../` and `..\` are valid. An equivalent attack might look like:
```

https://insecure-website.com/loadImage?filename=......\windows\win.ini

```
## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Normalize and validate file paths
> - Use allowlists for permitted filenames
> - Avoid directly using user input in file paths
> - Run applications with minimal privileges
> - Store sensitive files outside the web root

## 🔗 Resources

- 🌐 PortSwigger: [Path Traversal](https://portswigger.net/web-security/file-path-traversal)

