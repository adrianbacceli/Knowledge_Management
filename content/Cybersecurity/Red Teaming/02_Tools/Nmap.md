---
title: Nmap - Network
draft: false
tags:
  - enumeration
  - nmap
  - network
  - services
  - ports
NeedsReview: false
---
> [!summary] Core Concept  
> Nmap (Network Mapper) is a versatile tool for network discovery and security auditing. This note covers essential techniques from basic host discovery to advanced scanning.

## File Output Formats

### Basic Syntax
```bash
sudo nmap 10.129.2.0/24 -sn -oA tnet | grep for | cut -d" " -f5
```

Here's an optimized and expanded version of your Nmap notes with improved readability, clearer explanations, and enhanced metadata for better knowledge management in Quartz/Obsidian:

---

### Output Files Explained
| Argument | File Type | Contents |
|----------|-----------|----------|
| `-oA tnet` | `.gnmap` | Grepable format (machine-readable) |
| | `.nmap` | Standard human-readable output |
| | `.xml` | XML format for tool integration |

### Example Output Structure
```bash
┌──(kali㉿kali)-[~/nmaptest]
└─$ ll
total 12
-rw-r--r-- 1 root root  509 Oct 10 18:00 tnet.gnmap  # Machine parsing
-rw-r--r-- 1 root root 1235 Oct 10 18:00 tnet.nmap   # Human analysis
-rw-r--r-- 1 root root 3234 Oct 10 18:00 tnet.xml    # Tool integration
```

---

## Host Discovery Techniques

### 1. Basic Ping Sweep
```bash
sudo nmap -sn 10.129.2.0/24
```
- **`-sn`**: Ping scan only (no port scan)
- **Best for**: Quick network mapping

### 2. Targeted Host Discovery
```bash
sudo nmap -sn 192.168.0.1-250  # Range
sudo nmap -sn -iL hosts.lst     # From file
```

> [!warning] Firewall Consideration  
> ICMP-based discovery may fail if hosts block ping requests.

### 3. ARP vs. ICMP Discovery
```bash
# ARP Scanning (Local Networks)
sudo nmap 192.168.0.1/24 -sn -PE --disable-arp-ping

# ICMP Scanning (External Networks)
sudo nmap -Pn 8.8.8.8  # Skip host discovery
```

| Method | When to Use           |
| ------ | --------------------- |
| ARP    | Local subnet scanning |
| ICMP   | External networks     |
| `-Pn`  | When hosts block ICMP |

---

## Port Scanning Fundamentals

### Common Scan Types
| Command | Technique | Use Case |
|---------|-----------|----------|
| `-sS` | SYN Stealth Scan | Default for root users |
| `-sT` | TCP Connect Scan | Non-root users |
| `-sU` | UDP Scan | Finding UDP services |

### Port Specification
```bash
nmap -p 22,80,443      # Specific ports
nmap -p 1-1000         # Port range
nmap --top-ports 50    # Common ports
nmap -p-               # ALL ports (1-65535)
```

### Scan States Explained
| State | Meaning |
|-------|---------|
| `open` | Service actively accepting connections |
| `filtered` | Firewall may be blocking |
| `closed` | Port accessible but no service running |

---

## Advanced Scanning

### 1. Packet Tracing
```bash
sudo nmap 10.129.2.28 -p 21 --packet-trace -Pn -n
```
- **`--packet-trace`**: Show sent/received packets
- **`-n`**: Disable DNS resolution (faster scans)

### 2. Comprehensive Scanning
```bash
nmap -A 192.168.1.1  # OS detection + service version + scripts
```
Includes:
- OS fingerprinting (`-O`)
- Service detection (`-sV`)
- NSE scripts (`--script`)

### 3. OS Detection via TTL
```bash
$ ping example.com
64 bytes from... ttl=54  # Linux (64 - 10 hops = 54)
```

| OS              | Initial TTL | Common Observed TTL |
| --------------- | ----------- | ------------------- |
| Linux           | 64          | 54-64               |
| Windows         | 128         | 110-128             |
| Network Devices | 255         | 200-255             |

---

## Practical Cheatsheet

### Network Mapping
```bash
# Live host discovery
sudo nmap -sn 192.168.1.0/24 -oA network_scan

# Full port scan with service detection
sudo nmap -p- -sV -A 10.10.10.10 -oA full_scan
```

### Service Enumeration
```bash
# Quick top ports scan
nmap --top-ports 20 -sV target.com

# UDP service discovery
sudo nmap -sU -p 53,161,162 target.com
```

> [!tip] Pro Tip  
> Combine scans with `tee` for real-time monitoring:  
> `nmap -A 10.10.10.10 | tee scan_results.txt`

---
> [!summary] Summary  
> This cheat sheet aims to provide a quick graphical description of all the possible commands using [Nmap](Nmap.md) during a network scanning.

# Tables of options
## Scanning Options

| **Nmap Option**              | **Description**                                                                 |
|-----------------------------|---------------------------------------------------------------------------------|
| `10.10.10.0/24`             | Target network range.                                                          |
| `-sn`                       | Disables port scanning.                                                        |
| `-Pn`                       | Disables ICMP Echo Requests                                                    |
| `-n`                        | Disables DNS Resolution.                                                       |
| `-PE`                       | Performs the ping scan by using ICMP Echo Requests against the target.         |
| `--packet-trace`            | Shows all packets sent and received.                                           |
| `--reason`                  | Displays the reason for a specific result.                                     |
| `--disable-arp-ping`        | Disables ARP Ping Requests.                                                    |
| `--top-ports=<num>`         | Scans the specified top ports that have been defined as most frequent.         |
| `-p-`                       | Scan all ports.                                                                |
| `-p22-110`                  | Scan all ports between 22 and 110.                                             |
| `-p22,25`                   | Scans only the specified ports 22 and 25.                                      |
| `-F`                        | Scans top 100 ports.                                                           |
| `-sS`                       | Performs a TCP SYN-Scan.                                                       |
| `-sA`                       | Performs a TCP ACK-Scan.                                                       |
| `-sU`                       | Performs a UDP Scan.                                                           |
| `-sV`                       | Scans the discovered services for their versions.                              |
| `-sC`                       | Perform a Script Scan with scripts that are categorized as "default".          |
| `--script <script>`         | Performs a Script Scan by using the specified scripts.                         |
| `-O`                        | Performs an OS Detection Scan to determine the OS of the target.               |
| `-A`                        | Performs OS Detection, Service Detection, and traceroute scans.                |
| `-D RND:5`                  | Sets the number of random Decoys that will be used to scan the target.         |
| `-e`                        | Specifies the network interface that is used for the scan.                     |
| `-S 10.10.10.200`           | Specifies the source IP address for the scan.                                  |
| `-g`                        | Specifies the source port for the scan.                                        |
| `--dns-server <ns>`         | DNS resolution is performed by using a specified name server.                  |

## Output Options

| **Nmap Option**              | **Description**                                                                 |
|-----------------------------|----------------------------------------------------------------------------------|
| `-oA filename`              | Stores the results in all available formats starting with the name of "filename". |
| `-oN filename`              | Stores the results in normal format with the name "filename".                    |
| `-oG filename`              | Stores the results in "grepable" format with the name of "filename".             |
| `-oX filename`              | Stores the results in XML format with the name of "filename".                    |

## Performance Options

| **Nmap Option**              | **Description**                                                                 |
|-----------------------------|----------------------------------------------------------------------------------|
| `--max-retries <num>`       | Sets the number of retries for scans of specific ports.                         |
| `--stats-every=5s`          | Displays scan's status every 5 seconds.                                         |
| `-v/-vv`                    | Displays verbose output during the scan.                                        |
| `--initial-rtt-timeout 50ms`| Sets the specified time value as initial RTT timeout.                           |
| `--max-rtt-timeout 100ms`   | Sets the specified time value as maximum RTT timeout.                           |
| `--min-rate 300`            | Sets the number of packets that will be sent simultaneously.                    |
| `-T <0-5>`                  | Specifies the specific timing template.                                         |



# Nmap Scan Configuration Examples

Below are commonly used Nmap configurations tailored to specific real-world scenarios.


## 🔍 Basic Host Discovery (Ping Sweep)
Quickly discover which hosts are up on a local subnet without scanning for open ports.

```bash
nmap -sn 10.10.10.0/24
```

## 👣 OS and Version Detection with Common Scripts

Deep recon - OS detection, version detection, script scanning, and traceroute.

```bash
nmap -A -T4 target.com
```

## 🧱 Firewall Evasion with Decoys and Source Spoofing

Evade detection using decoys, spoofed source IP, and specific network interface.

```bash
nmap -sS -D RND:5 -S 10.10.10.200 -e eth0 target.com
```

## 🎯 Full TCP Port Scan

Scan all 65,535 TCP ports when services may be running on non-standard ports.

```bash
nmap -p- -T4 target.com
```

## 🚀 Fast Top 100 Ports Scan

Quickly identify open common ports during fast recon.

```bash
nmap -F target.com
```

## 🧪 UDP Scan for Specific Ports

Scan key UDP services like DNS, DHCP, NTP, and SNMP.

```bash
nmap -sU -p53,67,123,161 target.com
```

## 🔬 Version and Script Scan on Open Ports

Fingerprint services and run default NSE scripts.

```bash
nmap -sV -sC target.com
```

## 📜 Custom Script Scan

Run vulnerability scripts to identify known CVEs.

```bash
nmap --script vuln target.com
```

## 🔧 Output in All Formats

Store results in all formats for parsing and reporting.

```bash
nmap -oA scan_results -sV target.com
```

## 📡 DNS Resolution via Custom DNS Server

Use alternative DNS server to bypass internal or misconfigured DNS.

```bash
nmap --dns-server 8.8.8.8 target.com
```

## 📈 Real-Time Stats for Long Scans

Track progress during long scans while balancing speed.

```bash
nmap -p- --stats-every 5s -T3 target.com
```

## 🕵️ Stealth TCP SYN Scan (Half-Open Scan)

Evade detection using a stealthy TCP scan.

```bash
nmap -sS -T2 target.com
```

## 🔄 Re-scan Only Changed Hosts

Controlled scan across many hosts using a target list.

```bash
nmap --scan-delay 1s --max-retries 2 --host-timeout 30m -iL targets.txt
```

## 🧭 Scan with OS Detection Only

Identify OS without service or version detection.

```bash
nmap -O target.com
```

## 🌐 Scan with Specific Source Port (Firewall Evasion)

Send traffic from port 53 (DNS) to bypass firewall filtering.

```bash
nmap -g 53 target.com
```

## 🛠 Combined Scan for Security Audit

Full audit - port scan, service and OS detection, vulnerability scripts, and reason output.

```bash
nmap -sS -sV -O -p- --script vuln --reason -T4 target.com
```



---

## **Nmap Scenario Catalog**  
**Organized by: Frequency of Use → Depth of Enumeration → Risk Level**  

> [!abstract] Common Scenarios  
> Here’s a comprehensive expansion of Nmap scenarios covering service enumeration, vulnerability discovery, and real-world use cases, structured for your Quartz/Obsidian knowledge base


### **1. Quick Recon (Top-Ports Scan)**  
**Use Case**: Rapid initial assessment  
**Command**:  
```bash
nmap --top-ports 20 -sV -T4 10.129.2.28 -oA quick_scan
```  
**Flags**:  
- `--top-ports 20`: Scans 20 most common ports  
- `-sV`: Light version detection  
**Output**:  
```markdown
PORT     STATE SERVICE    VERSION  
22/tcp   open  ssh        OpenSSH 8.2p1  
80/tcp   open  http       Apache 2.4.41  
443/tcp  open  ssl/http   Apache 2.4.41
```  
**Tags**: `#recon #quick-scan`  

---

### **2. Full Service Enumeration**  
**Use Case**: Comprehensive service fingerprinting  
**Command**:  
```bash
nmap -p- -sV -sC -O --script=banner 10.129.2.28 -oA full_enum
```  
**Key Flags**:  
- `-sC`: Default NSE scripts  
- `--script=banner`: Grabs service banners  
**Pro Tip**:  
> Pipe to `tee` for real-time analysis:  
> `nmap ... | tee -a scan.log`

---

### **3. Vulnerability Probing**  
**Use Case**: Identifying known vulnerabilities  
**Command**:  
```bash
nmap -sV --script="vuln and safe" 10.129.2.28
```  
**Critical Scripts**:  
```markdown
- `http-vuln-cve2017-5638` (Apache Struts)  
- `smb-vuln-ms17-010` (EternalBlue)  
- `ssl-heartbleed`  
```  
**Risk**: ⚠️ May trigger alerts  

---

### **4. UDP Service Discovery**  
**Use Case**: Finding DNS/NTP/Snmp services  
**Command**:  
```bash
sudo nmap -sU -p 53,123,161,162 -Pn --max-retries 1 10.129.2.28
```  
**Challenges**:  
> UDP scans are slow (use `--max-retries 1` to speed up)  

---

### **5. Web App Focused**  
**Use Case**: HTTP/S service deep-dive  
**Command**:  
```bash
nmap -p 80,443,8080,8443 --script=http* 10.129.2.28
```  
**Key Scripts**:  
```markdown
- `http-title`: Grabs page titles  
- `http-robots.txt`: Checks for disallowed paths  
- `http-sql-injection`: Basic SQLi probe  
```  

---

### **6. SMB Enumeration**  
**Use Case**: Windows/File share audits  
**Command**:  
```bash
nmap -p 139,445 --script="smb* and not brute" 10.129.2.28
```  
**Critical Checks**:  
```markdown
- `smb-os-discovery`: OS fingerprinting  
- `smb-enum-shares`: List accessible shares  
- `smb-vuln-*`: Vulnerability checks  
```  

---

### **7. Stealthy Scan w/ Decoys**  
**Use Case**: Evading basic IDS  
**Command**:  
```bash
sudo nmap -sS -D RND:5,ME -T2 --scan-delay 10s 10.129.2.28
```  
**Evasion Tactics**:  
```markdown
- `RND:5,ME`: 5 random decoy IPs + your real IP  
- `--scan-delay 10s`: Adds jitter between probes  
```  

---

### **8. IPv6 Scanning**  
**Use Case**: Modern network assessment  
**Command**:  
```bash
nmap -6 --script=targets-ipv6-multicast-echo 2001:db8::/64
```  

---

### **9. ICS/SCADA Scanning**  
**Use Case**: Industrial system audits  
**Command**:  
```bash
nmap -p 502,102,161 --script=modbus* 10.129.2.28 -T2
```  
**Key Ports**:  
```markdown
- 502 (Modbus)  
- 102 (Siemens S7)  
- 4840 (OPC UA)  
```  

---

## **Scenario Comparison Matrix**  
| Scenario                | Speed  | Stealth | Info Gathered          | Risk  |  
|-------------------------|--------|---------|------------------------|-------|  
| Quick Recon             | ★★★★★ | ★★☆☆☆  | Basic services         | Low   |  
| Full Enumeration        | ★★☆☆☆ | ★☆☆☆☆  | OS/SW versions         | Medium|  
| Vulnerability Probing   | ★★★☆☆ | ★☆☆☆☆  | CVE matches            | High  |  
| UDP Discovery           | ★☆☆☆☆ | ★★★☆☆  | DNS/NTP services       | Medium|  
| Web App Focused         | ★★★★☆ | ★★☆☆☆  | HTTP headers/routes    | Medium|  


---
