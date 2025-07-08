---
title: Server-Side Request Forgery (SSRF)
draft: false
tags:
  - SSRF
  - Cross-Site
  - web
  - Vulnerability
NeedsReview: true
---
# 🛡️ Server-Side Request Forgery (SSRF)

> [!info] What is SSRF?
> Server-side request forgery (SSRF) is a web security vulnerability that allows an attacker to cause the server-side application to make requests to unintended locations.

## 🧠 How It Works

In an SSRF attack, the attacker manipulates the server into making HTTP requests to internal or external systems. These requests can:

- Access internal-only services
- Leak sensitive data (e.g., credentials)
- Bypass network access controls

### 🌀 SSRF Against the Server

> [!example] Loopback Exploitation
> An attacker can target the server itself using loopback addresses like `127.0.0.1` or `localhost`.

#### 💬 Example Scenario

A shopping app checks stock via a back-end API:
```

http POST /product/stock HTTP/1.0 Content-Type: application/x-www-form-urlencoded

stockApi=http://stock.weliketoshop.net:8080/product/stock/check?productId=6&storeId=1

```
An attacker modifies the request:
```

http POST /product/stock HTTP/1.0 Content-Type: application/x-www-form-urlencoded

stockApi=http://localhost/admin

```
> [!danger] Impact
> The server fetches the `/admin` page locally and returns it to the attacker, bypassing normal access controls.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Validate and sanitize all URLs and input parameters
> - Use allowlists for permitted domains/IPs
> - Block requests to internal IP ranges (e.g., `127.0.0.1`, `169.254.169.254`)
> - Disable unused URL-fetching functionality
> - Monitor and log outbound requests

## 🔗 Resources

- 🌐 PortSwigger: SSRF

## 🔗 Related Notes

- [[Web Security Best Practices]]
- [[Input Validation]]
- [[Access Control]]
- [[HTTP Request Smuggling]]