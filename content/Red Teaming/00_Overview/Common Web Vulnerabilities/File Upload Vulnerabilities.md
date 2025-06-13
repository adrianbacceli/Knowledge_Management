---
title: File Upload Vulnerabilities
draft: false
tags:
  - File-Upload
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---
# 🛡️ File Upload Vulnerabilities

> [!info] What Are File Upload Vulnerabilities?
> File upload vulnerabilities occur when a web server allows users to upload files without properly validating their name, type, contents, or size. This can lead to serious security risks, including remote code execution.

## 🧠 How It Works

Many web applications allow users to upload files (e.g., images, documents). If the application fails to enforce strict validation, attackers can upload:

- Executable scripts (e.g., `.php`, `.jsp`)
- Oversized files to exhaust disk space
- Files with malicious names to overwrite critical files

### 🧨 Triggering Execution

In some cases, simply uploading the file causes harm. In others, the attacker must send a follow-up request to execute the uploaded file.

## 💥 Potential Impacts

> [!danger] Consequences of Poor Validation
> - **Remote Code Execution**: Uploading a web shell to gain full server control  
> - **File Overwrite**: Replacing critical files with malicious ones  
> - **Directory Traversal**: Uploading files to unintended locations  
> - **Denial of Service (DoS)**: Filling up disk space with large files

## 🧪 Common Validation Failures

> [!example] What Goes Wrong
> - No restriction on file type or MIME type  
> - No validation of file contents (magic bytes)  
> - No filename sanitization  
> - No file size limits  
> - Upload directory is within the web root and executable

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Validate file type using both MIME type and file signature  
> - Rename uploaded files and store them outside the web root  
> - Restrict executable file types (e.g., `.php`, `.exe`)  
> - Set strict file size limits  
> - Use allowlists for accepted file extensions  
> - Disable execution permissions on upload directories

## 🔗 Resources

- 🌐 PortSwigger: [File Upload Vulnerabilities](https://portswigger.net/web-security/file-upload)
