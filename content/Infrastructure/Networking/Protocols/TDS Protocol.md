---
title: 
draft: false
tags:
  - TDS
  - port-1433
NeedsReview: false
---

## 📡 What is TDS (Tabular Data Stream)?

**TDS** is the **application-layer protocol** used by Microsoft SQL Server to communicate with clients. It defines how data is **packaged and transmitted** over the network.

---

## 🔍 Key Features

- **Used by**: Microsoft SQL Server, Sybase
- **Default Port**: `1433` (TCP)
- **Encapsulates**:
    - SQL queries
    - Authentication data
    - Result sets
    - Error messages
- **Supports**: Encryption, compression, and session management

---

## 🧰 Relevance in Ethical Hacking

TDS is important in **enumeration**, **exploitation**, and **lateral movement** phases when targeting MSSQL servers.

### 🔐 Common Attacks Involving TDS:

- **Brute-force or password spraying** via TDS login
- **SQL injection** over TDS
- **Impacket’s `mssqlclient.py`** uses TDS to interact with MSSQL
- **[[13_Credential_Access#Kerberoasting|Kerberoasting]]** targets MSSQL service accounts (which use TDS)
- **Command execution** via `xp_cmdshell` over TDS

---

## 🧪 Tools That Use TDS

- `impacket.mssqlclient.py`
- `sqsh` (SQL shell for Sybase/MSSQL)
- `Metasploit` modules for MSSQL
- `nmap` with `ms-sql-*` NSE scripts

---

## 🔗 Where It Fits in the Unified Kill Chain

- **Discovery**: Enumerating MSSQL services
- **Credential Access**: Brute-forcing or dumping credentials
- **Execution**: Running commands via `xp_cmdshell`
- **Lateral Movement**: Using linked servers or SQL Agent jobs