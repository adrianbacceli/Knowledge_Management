---
title: NoSQL Injection
draft: false
tags:
  - NoSQL
  - Injection
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---
# 🛡️ NoSQL Injection

> [!info] What is NoSQL Injection?
> NoSQL injection is a vulnerability where an attacker can interfere with the queries that an application makes to a NoSQL database.

## 🧠 How It Works

NoSQL databases differ from traditional relational databases by using flexible data models and various query languages. This flexibility can introduce injection risks if user input is not properly validated.

### 💥 Potential Impacts

> [!danger] What an Attacker Can Do
> - 🛑 Bypass authentication or protection mechanisms  
> - 📂 Extract or modify sensitive data  
> - 💣 Cause denial of service (DoS)  
> - 🖥️ Execute arbitrary code on the server

## 🧬 Why NoSQL Is Different

> [!abstract] NoSQL vs SQL
> - NoSQL databases (like MongoDB, CouchDB, Firebase) store data in formats like JSON, BSON, or key-value pairs.
> - They lack a universal query language like SQL.
> - They often have fewer relational constraints, which can increase the attack surface.

### 💬 Example Scenario (MongoDB)

Suppose a login form uses the following query:
```

javascript db.users.find({ username: inputUsername, password: inputPassword })

```
An attacker could submit:
```

json { "username": { "$ne": null }, "password": { "$ne": null } }

```
This would match any user where both fields are not null, effectively bypassing authentication.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Use strict input validation and type checking
> - Avoid directly embedding user input in queries
> - Use query builders or ORM libraries that handle escaping
> - Implement proper access controls and logging

## 🔗 Resources

- 🌐 PortSwigger: [NoSQL Injection](https://portswigger.net/web-security/nosql-injection)