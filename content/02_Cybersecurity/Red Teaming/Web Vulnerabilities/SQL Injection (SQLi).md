---
title: SQL Injection (SQLi)
draft: false
tags:
  - SQLi
  - SQL-injection
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---
# 🛡️ SQL Injection (SQLi)

> [!info] What is SQL Injection?
> SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.

## 🧠 How It Works

An attacker can manipulate input fields or URL parameters to inject malicious SQL code. This can allow them to:

- View unauthorized data (e.g., other users' information)
- Modify or delete data
- Bypass authentication
- Execute administrative operations on the database
- In some cases, compromise the underlying server or perform denial-of-service (DoS) attacks

### 💬 Example Scenario

Suppose a login form uses the following SQL query:
```

sql SELECT * FROM users WHERE username = 'user' AND password = 'pass';

```
An attacker could input:

- **Username:** `admin' --`
- **Password:** *(anything)*

This results in:
```

sql SELECT * FROM users WHERE username = 'admin' --' AND password = '';

```
The `--` sequence comments out the rest of the query, potentially granting access without a valid password.

> [!danger] Impact
> SQLi can lead to full database compromise, data breaches, and even remote code execution in severe cases.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Use **parameterized queries** or **prepared statements**
> - Employ **ORMs** (Object-Relational Mappers) that abstract SQL logic
> - Validate and sanitize all user inputs
> - Implement **least privilege** for database accounts
> - Regularly test for vulnerabilities using tools like SQLMap or Burp Suite

## 🔗 Resources

- 🌐 PortSwigger: [SQL Injection](https://portswigger.net/web-security/sql-injection)

