---
title: Access Control
draft: false
tags:
  - Access-Control
  - Broken-Access
  - offensive-security
  - web
NeedsReview: true
---
# 🛡️ Access Control

> [!info] What is Access Control?
> Access control is the enforcement of rules that determine who or what is authorized to perform actions or access resources within a system.

## 🧠 How It Works

Access control in web applications relies on two foundational components:

- **Authentication**: Confirms the identity of the user.
- **Session Management**: Tracks the user's identity across multiple HTTP requests.

Once a user is authenticated, **access control** determines whether they are permitted to perform specific actions or access certain resources.

## ⚠️ Broken Access Control

> [!danger] Why It’s Critical
> Broken access controls are among the most common and severe web vulnerabilities. They can lead to unauthorized access to sensitive data, privilege escalation, and full system compromise.

### 🧩 Complexity of Access Control

Access control is not just a technical issue—it involves:

- Business logic
- Organizational policies
- Legal and compliance requirements

Because these decisions are made by humans and implemented in code, the potential for error is high.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Enforce access control on the server side
> - Use role-based or attribute-based access control models
> - Deny access by default
> - Avoid relying on client-side enforcement
> - Regularly audit and test access control mechanisms

## 🔗 Resources

- 🌐 PortSwigger: [Access control](https://portswigger.net/web-security/access-control)