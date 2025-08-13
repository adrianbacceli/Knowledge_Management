---
title: Chocolatey
draft: true
tags:
  - Hack-The-Box
  - HTB
  - Automation
  - Install
  - Setup
  - Windows
NeedsReview: true
---
# Chocolatey

Chocolatey is a free and open software package management solution that can manage the installation and dependencies of our software packages and scripts. It also allows for automation with Powershell, Ansible, and several other management solutions. Chocolatey will enable us to install the tools we need from one source, rather than downloading and installing each tool individually from the internet. Follow the Powershell commands below to learn how to install Chocolatey and use it to gather/install our tools.

---
## Install Chocolatey

```powershell-session
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

---
## Updating Chocolatey

```powershell-session
choco upgrade chocolatey -y
```

---
## Automating packages

we can use the `packages.config` file for the installation. This is an XML file that chocolatey can reference to install a list of packages.

---

## Sample script

```powershell
# Choco build script

write-host "*** Initial app install for core tools and packages. ***"

write-host "*** Configuring chocolatey ***"
choco feature enable -n allowGlobalConfirmation

write-host "*** Beginning install, go grab a coffee. ***"
choco upgrade wsl2 python git vscode openssh openvpn netcat nmap wireshark burp-suite-free-edition heidisql sysinternals putty golang neo4j-community openjdk

write-host "*** Build complete, restoring GlobalConfirmation policy. ***"
choco feature disable -n allowGlobalConfirmation
```


---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
