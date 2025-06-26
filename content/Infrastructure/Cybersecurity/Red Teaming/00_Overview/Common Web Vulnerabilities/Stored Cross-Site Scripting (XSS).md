---
title: Stored Cross-Site Scripting (XSS)
draft: false
tags:
  - Stored
  - Cross-Site
  - Scripting
  - XSS
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---
# 🛡️ Stored Cross-Site Scripting (XSS)

> [!info] What is Stored XSS?
> Stored cross-site scripting occurs when an application stores malicious input from a user and later includes it in web pages served to other users, without proper sanitization or encoding.

## 🧠 How It Works

Unlike reflected XSS, where the payload is part of the request and response cycle, **stored XSS** involves the payload being **persisted** on the server (e.g., in a database, comment field, or message board) and then served to users later.

### 💬 Example Scenario

1. An attacker submits a comment on a blog post:
```
html
```
2. The application stores this comment in its database.
3. When another user views the blog post, the stored script is rendered in their browser:
```
html
```

> [!danger] Impact
> The malicious script executes in the victim's browser, potentially stealing cookies, session tokens, or performing actions on behalf of the user.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Sanitize and encode all user input before storing or rendering.
> - Use Content Security Policy (CSP) headers.
> - Implement proper input validation and output encoding.
> - Avoid inserting raw HTML from user input into the DOM.

## 🔗 Resources

- 🌐 PortSwigger: [Reflected Cross-Site Scripting (XSS)](https://portswigger.net/web-security/cross-site-scripting)