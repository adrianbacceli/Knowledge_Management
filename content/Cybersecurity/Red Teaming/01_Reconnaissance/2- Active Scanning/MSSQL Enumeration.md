---
title: MSSQL Enumeration - Credential Access
draft: false
tags:
  - mssql
  - enumeration
  - credential-access
  - port-1433
NeedsReview: true
---
> [!summary] Core Concept  
> Enumerate Microsoft SQL Server services to identify users, roles, permissions, databases, and execution capabilities to prepare for exploitation.

### 🔹 In — Gaining Initial Foothold → _Credential Access_

---

## 🔸 Automatic Enumeration ([[nmap -scripts]])

```bash
nmap -sV -p1433 --script \
  ms-sql-info,ms-sql-empty-password,ms-sql-xp-cmdshell,ms-sql-config,ms-sql-ntlm-info,ms-sql-tables,ms-sql-hasdbaccess,ms-sql-dac,ms-sql-dump-hashes \
  --script-args mssql.instance-port=1433,mssql.username=sa,mssql.password= \
  <target-ip>
```

|Modifier|Description|
|---|---|
|`-sV`|Detects service version information on the target port|
|`-p1433`|Scans only TCP port 1433 (default MSSQL port)|
|`--script`|Specifies NSE scripts to run during the scan|
|`ms-sql-info`|Collects general information about the SQL server instance|
|`ms-sql-empty-password`|Attempts login using empty password for known users|
|`ms-sql-xp-cmdshell`|Checks if `xp_cmdshell` can be used for command execution|
|`ms-sql-config`|Queries database configuration settings|
|`ms-sql-ntlm-info`|Retrieves NTLM authentication data if possible|
|`ms-sql-tables`|Lists all user tables in accessible databases|
|`ms-sql-hasdbaccess`|Shows which databases the user can access|
|`ms-sql-dac`|Detects support for Dedicated Administrator Connection (DAC)|
|`ms-sql-dump-hashes`|Tries to extract login names and password hashes|
|`--script-args`|Supplies custom arguments to scripts|
|`mssql.instance-port=1433`|Specifies the port where the MSSQL service is running|
|`mssql.username=sa`|Uses the `sa` user for authentication|
|`mssql.password=`|Attempts login with a blank password|

## 🔸 Metasploit Modules

```bash
use auxiliary/scanner/mssql/mssql_ping   # Identifies MSSQL instances and gathers basic information such as server name, domain, and instance name.
use auxiliary/admin/mssql/mssql_enum   # Performs enumeration of databases, configurations, roles, and privileges.
use auxiliary/admin/mssql/mssql_enum_sql_logins   # Lists SQL logins on the server, including user types and status.
use auxiliary/scanner/mssql/mssql_hashdump   # Extracts password hashes for SQL logins from the master database.
use admin/mssql/mssql_findandsampledata   # Searches for and extracts sample data from accessible tables and columns.
```

## 🔸 Manual Queries

```sql
SELECT SYSTEM_USER, USER_NAME(), IS_SRVROLEMEMBER('sysadmin');
SELECT @@version;
SELECT name FROM master.sys.databases;
SELECT * FROM sysobjects WHERE xtype='U';
SELECT * FROM sys.server_principals;
SELECT * FROM fn_my_permissions(NULL, 'SERVER');
SELECT * FROM fn_my_permissions(NULL, 'DATABASE');
```

## 🔸 Bruteforce

```bash
mssqlpwner hosts.txt brute -ul users.txt -pl passwords.txt
```

## 🔗 Related

- [Identifying Ports and Services though Network Enumeration](Network%20Enumeration)
- [[What is Kerberoasting]]
- [[MSSQL Exploitation]]
