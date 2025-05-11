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
| Method | When to Use |
|--------|-------------|
| ARP | Local subnet scanning |
| ICMP | External networks |
| `-Pn` | When hosts block ICMP |

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
| OS | Initial TTL | Common Observed TTL |
|----|------------|---------------------|
| Linux | 64 | 54-64 |
| Windows | 128 | 110-128 |
| Network Devices | 255 | 200-255 |

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

## Related Notes
- [[Network Enumeration]]
