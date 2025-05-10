---
title: Common Scenarios Catalog
draft: false  
tags:  
- nmap
- enumeration
- scenarios
- use case
---
> [!abstract] Summary  
> Here’s a comprehensive expansion of Nmap scenarios covering service enumeration, vulnerability discovery, and real-world use cases, structured for your Quartz/Obsidian knowledge base


## **Nmap Scenario Catalog**  
**Organized by: Frequency of Use → Depth of Enumeration → Risk Level**  

---

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
