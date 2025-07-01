---
title: 02_Web Pentest Checklist
draft: false
tags:
  - web
  - Penetration
  - Testing
  - vulnerability-scanning
  - Web-Security-Scanner
  - offensive-security
  - XXE
  - XSS
  - SSRF
NeedsReview: true
---

## 🧪 Typical Workflow

1. **[[Burpsuite|Burp]] the site** to observe structure and gather cookies/headers.
2. **[[- Reconnaissance#Spidering|Spider]] the site** to collect known paths.
3. Use **Gobuster** with a tailored wordlist to find hidden directories or vhosts.
