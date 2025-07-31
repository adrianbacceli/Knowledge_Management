---
title: Gobuster
draft: false
tags:
  - enumeration
  - web
  - webscrap
  - Website
  - domain
  - subdomain
  - brute-force
NeedsReview: true
---
# Gobuster - Web Brute-force Enumeration

> [!summary] **Core Concept**  
> **Gobuster** is a fast and flexible brute-forcing tool written in Go. It’s commonly used for **directory**, **DNS**, and **virtual host (vhost)** enumeration during web application reconnaissance.

---

## 📁 1. **Directory Enumeration**

**Goal**: Discover hidden or unlinked directories and files on a web server.

### 🔍 What It Does:

- Sends HTTP requests to guess common paths like:
    - `/admin/`
    - `/login/`
    - `/backup.zip`
- Helps find **unprotected resources**, **admin panels**, or **sensitive files**.

---

### 🧠 Use Case: Directory Brute-Forcing

Used during **web application recon** to uncover hidden endpoints that may not be linked in the UI but are still accessible.


```bash
gobuster dir -u https://www.lolguides.com -w ../Documents/BruteForcing/dsstorewordlist\ \(WebsiteEnum\).txt --no-error -o burpedsite -t 1 --delay 3000ms
```

- `dir`: Mode for directory/file enumeration
- `--no-error`: Suppresses error messages (cleaner output)
- `-o burpedsite`: Output results to a file named `burpedsite`
- `-t 1`: Use 1 thread (quiet scan)
- `--delay 3000ms`: Delay between requests (useful for stealth or rate-limited targets)

---

## 🌐 2. **DNS Enumeration**

**Goal**: Discover subdomains and DNS records associated with a domain.

### 🔍 What It Does:

- Queries DNS servers to find:
    - Subdomains (e.g., `admin.example.com`)
    - MX records (mail servers)
    - TXT records (SPF, DKIM, etc.)
- Can reveal **internal infrastructure**, **third-party services**, or **shadow IT**.

### 🧠 Use Case:

Used in **external recon** to map the full attack surface of a target domain.


---

## 🏷️ 3. **Virtual Host (VHost) Enumeration**

**Goal**: Discover hidden websites hosted on the same IP address using virtual hosting.

### 🔍 What It Does:

- Sends HTTP requests with different `Host:` headers to the same IP.
- Identifies **virtual hosts** like:
    - `dev.example.com`
    - `staging.example.com`
- Useful when multiple sites share a single IP (common in shared hosting or internal environments).

### 🧠 Use Case: VHost Enumeration

Used when you suspect **multiple web apps** are hosted on the same server, especially in **bug bounty** or **internal pentests**.

```bash
gobuster vhost -w Documents/BruteForcing/subdomains-top1million-5000.txt -u https://url.site --append-domain
```

- `vhost`: Mode for virtual host brute-forcing
- `-w`: Wordlist of potential subdomains
- `-u`: Target URL
- `--append-domain`: Appends domain to each word (e.g., `admin.url.site`)


---
## 🧪 Typical Workflow

1. **[[0. Burp Suite Core|Burp]] the site** to observe structure and gather cookies/headers.
2. **[[- Reconnaissance#Spidering|Spider]] the site** to collect known paths.
3. Use **Gobuster** with a tailored wordlist to find hidden directories or vhosts.

---

> [!tip] **Pro Tip**  
> Use Gobuster with **custom wordlists** based on `.git`, `.DS_Store`, or spidered content for more accurate results. Combine with tools like **ffuf** or **dirsearch** for broader coverage.
