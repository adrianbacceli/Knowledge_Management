---
title: Nmap Cheatsheet
draft: false  
tags:  
- nmap
- commands
- cheatsheet
- examples
---

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
