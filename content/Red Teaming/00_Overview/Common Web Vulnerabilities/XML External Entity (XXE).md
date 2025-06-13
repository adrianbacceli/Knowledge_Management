---
title: XML External Entity (XXE)
draft: false
tags:
  - XML-External-Entity
  - XEE
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---

# 🛡️ XML External Entity (XXE)


XML External Entity injection (XXE) is a **web security vulnerability** that allows an attacker to interfere with an application's processing of XML data.
  

> [!warning] Potential Impact
> XXE often enables attackers to:
> - View files on the application server's filesystem.
> - Interact with back-end or external systems accessible by the application.

In some cases, attackers can escalate an XXE attack to **compromise the underlying server** or other back-end infrastructure by leveraging the vulnerability to perform **Server-Side Request Forgery (SSRF)** attacks.

## 🔗 Resources

- 🌐 PortSwigger: [Web Security - XXE](https://portswigger.net/web-security/xxe) 
