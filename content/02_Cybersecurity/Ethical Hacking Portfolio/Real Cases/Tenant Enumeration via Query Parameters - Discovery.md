---
title: Tenant Enumeration via Query Parameters - Discovery
draft: false
tags:
  - discovery
  - idor
  - information-disclosure
  - indexing
NeedsReview: false
---
> [!summary] Core Concept  
A web application exposes tenant-specific identifiers through URL query parameters, allowing unauthorized enumeration of client organizations. This is a classic case of **Insecure Direct Object Reference (IDOR)** combined with poor indexing and weak access controls.

## 🕵️ Description of the Vulnerability

A multi-tenant web platform allows public discovery of sensitive login and recovery portals through indexed search engine results.

- Searching `site:targetdomain.com login` in Google reveals hidden login pages.
- URLs include the `?e=` query parameter, which maps to specific tenant IDs.
- Changing the value of `e` reveals login portals for different clients.

### 🧪 Example URLs:
```
[https://www.example.com/index.php?e=211](https://www.example.com/index.php?e=211) 
[https://www.example.com/index.php?e=210](https://www.example.com/index.php?e=210) 
[https://www.example.com/index.php?e=209](https://www.example.com/index.php?e=209)
````

- These pages load tenant-specific branding or labels (e.g., organization names).
- No authentication is required to access these identifiers.

> [!danger]  
> This allows systematic mapping of all active clients on the platform and enables potential abuse.

---

## 🔍 HTML Source Disclosure

HTML source of login pages contains:

```html
<input type='hidden' name='e' value='211'>
````

- The value is hardcoded and client-specific.
- Server logic processes this value directly from form submissions (GET/POST).
- No validation or obfuscation is in place.

---

## ⚖️ Compliance & Privacy Violations

|Regulation / Standard|Violated Principle|
|---|---|
|Panama Law 81 (2019)|Data minimization, safe processing|
|EU GDPR (if applicable)|Unauthorized exposure of organizational data|
|ISO/IEC 27001|Improper classification and access control|

---

## ⚠️ Risk Summary

|Risk Type|Level|Description|
|---|---|---|
|Tenant Enumeration|🔶 High|Enumerate client names and IDs through predictable query manipulation|
|Sensitive URL Indexing|🔶 High|Search engines index login/recovery pages meant to be private|
|Improper Access Control|🔴 Critical|No validation on tenant identifiers or access restrictions|
|Phishing/Spoofing Vector|🔶 High|Exposed organization names enable targeted social engineering campaigns|

---

## ✅ Recommendations

1. **Block search engine indexing** of sensitive URLs via `robots.txt` and `<meta name="robots" content="noindex">`.
2. Apply **authentication and access controls** to restrict login portals to verified users only.
3. **Obfuscate or encrypt** tenant IDs in both URLs and form fields.
4. Validate all incoming tenant identifiers server-side to prevent manipulation.
5. Conduct a **Privacy Impact Assessment (PIA)** to align with local and international data protection frameworks.

---

## 🧾 Proof of Concept (PoC)

Accessing URLs with incremented tenant IDs loads separate login portals:

```text
https://www.example.com/index.php?e=210 → Organization A
https://www.example.com/index.php?e=209 → Organization B
```

This demonstrates that tenant names and presence on the platform are publicly accessible without authentication.
