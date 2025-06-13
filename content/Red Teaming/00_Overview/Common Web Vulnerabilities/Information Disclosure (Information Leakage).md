---
title: Information Disclosure (Information Leakage)
draft: false
tags:
  - information-disclosure
  - offensive-security
  - Vulnerability
  - web
NeedsReview: true
---
# 🛡️ Information Disclosure (Information Leakage)

> [!info] What is Information Disclosure?
> Information disclosure occurs when a website unintentionally reveals sensitive data to users or attackers. This can include user data, business information, or technical details about the application and its infrastructure.

## 🧠 Why It Matters

> [!danger] Risks of Disclosure
> - Exposure of user data (e.g., usernames, financial info)
> - Leakage of business-sensitive information
> - Revealing technical details that aid further attacks

Even seemingly harmless technical information can help attackers map out the system, identify vulnerabilities, and craft more sophisticated exploits.

## 💬 Examples of Information Disclosure

> [!example] Common Disclosure Scenarios
> - Revealing hidden directories or files via `robots.txt` or directory listings  
> - Access to source code through temporary or backup files  
> - Error messages that expose database schema (e.g., table or column names)  
> - Hard-coded secrets in source code (e.g., API keys, credentials)  
> - Credit card or personal data exposed in responses  
> - Behavioral differences that hint at valid usernames or resources

## 🧪 How Attackers Exploit It

Attackers often trigger information disclosure by:

- Sending malformed or unexpected input
- Observing error messages and response behavior
- Accessing misconfigured or forgotten endpoints
- Analyzing client-side code (e.g., JavaScript)

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Avoid verbose error messages in production
> - Sanitize and validate all user input
> - Secure access to sensitive files and directories
> - Remove hard-coded secrets from source code
> - Use proper access controls and logging
> - Regularly audit and test for information leaks

## 🔗 Resources

- 🌐 PortSwigger: [Information Disclosure](https://portswigger.net/web-security/information-disclosure)