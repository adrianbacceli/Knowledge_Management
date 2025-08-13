---
title: Duplicati
draft: false
tags:
  - backup
  - Restore
  - disaster-recovery
NeedsReview: false
---
# Duplicati

[Duplicati](https://duplicati.com/download) is a cross-platform backup solution also with strong capabilities. It also supports AES-256 for encryption, with optional asymmetric encryption using GPG (RSA or similar for key exchange). Data is encrypted client-side and it supports strong password-based key derivation. A great advantage for many people is the number of remote destinations Duplicati supports:

- Google Drive
- OneDrive
- Amazon S3
- SFTP
- Dropbox
- and others.

The installation process is also very simple but instead of using a GUI, Duplicati is uses a webserver for management. Let’s [download](https://duplicati.com/download) the installation package and install it.

```shell-session
cry0l1t3@hbt[/htb]$ cd ~/Downloads
cry0l1t3@hbt[/htb]$ sudo apt install ./duplicati-2.1.0.5_stable_2025-03-04-linux-x64-gui.deb
cry0l1t3@hbt[/htb]$ duplicati
```


---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
