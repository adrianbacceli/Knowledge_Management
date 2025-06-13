---
title: Reflected Cross-Site Scripting (XSS)
draft: false
tags:
  - Reflected
  - Cross-Site
  - Scripting
  - XSS
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---

# 🛡️ Reflected Cross-Site Scripting (XSS)

> [!info] What is Reflected XSS?
> Reflected cross-site scripting arises when an application receives data in an HTTP request and includes that data within the immediate response in an unsafe way.

## 🔍 Example Scenario

Suppose a website has a search function that receives the user-supplied search term in a URL parameter:
```
https://insecure-website.com/search?term=gift
```
The application echoes the supplied search term in the response:
``` html
You searched for: gift
```

> [!warning] Vulnerability
> If the application does not sanitize or encode the input, an attacker can inject malicious scripts.

### 🚨 Malicious Input Example

An attacker crafts a URL like:
```
https://insecure-website.com/search?term=
```
Which results in the following response:
```
html
You searched for:
```

> [!danger] Impact
> If another user clicks this malicious link, the script executes in their browser within the context of their session, potentially leading to session hijacking, data theft, or other malicious actions.

## 🔗 Resources

- 🌐 PortSwigger: [Reflected Cross-Site Scripting (XSS)](https://portswigger.net/web-security/cross-site-scripting)