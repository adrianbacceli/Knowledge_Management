
---  
title: Network Enumeration with Nmap
draft: false  
tags:  
- enumeration
- nmap
- network
- services
- ports
---


# Nmap Notes

## Format Storing

### Syntax
```bash
AdrianBacceli@htb[/htb]$ sudo nmap 10.129.2.0/24 -sn -oA tnet | grep for | cut -d" " -f5
```

### Arguments
- `-oA tnet`: Stores the results in all formats starting with the name 'tnet'.

### Sample Output
```bash
┌──(kali㉿kali)-[~/nmaptest]
└─$ ll
total 12
-rw-r--r-- 1 root root  509 Oct 10 18:00 tnet.gnmap
-rw-r--r-- 1 root root 1235 Oct 10 18:00 tnet.nmap
-rw-r--r-- 1 root root 3234 Oct 10 18:00 tnet.xml
```

### GNMAP / NMAP
```
# Nmap 7.94 scan initiated Tue Oct 10 18:00:26 2023 as: nmap -sn -oA tnet 192.168.0.1/24
Host: 192.168.0.1 ()    Status: Up
Host: 192.168.0.2 ()    Status: Up
...
# Nmap done at Tue Oct 10 18:00:34 2023 -- 256 IP addresses (10 hosts up) scanned in 7.64 seconds
```

---

## Network Testing with Nmap

### Syntax
```bash
AdrianBacceli@htb[/htb]$ sudo nmap 10.129.2.28 -p 21 --packet-trace -Pn -n --disable-arp-ping
```

### Flags
- `--packet-trace`: Shows all packets sent and received.
- `-n`: Disables DNS resolution.
- `--disable-arp-ping`: Disables ARP ping.

### Use Case
- Used to trace packets and responses.
- Disables other responses for clarity.

---

## OS Detection (TTL)

### TTL Values by OS
- Unix / Linux – 64
- Windows – 128
- Solaris/AIX – 265 

### Example
```bash
$ ping 8.8.8.8
64 bytes from 8.8.8.8: icmp_seq=1 ttl=116 time=65.3 ms
...
$ traceroute 8.8.8.8
1  _gateway (192.168.0.1)  6.427 ms ...
...
9  142.250.225.9 ... dns.google (8.8.8.8)  70.945 ms
```

In this case, TTL is 116 and number of hops is 9.
It gets close to 128, suggesting a Windows server.

---

## Comprehensive Scan

### `-A` Flag
- Performs service detection, OS detection, traceroute, and uses default scripts.

---

## Host Discovery (ICMP/ARP)

### Syntax
```bash
sudo nmap -sn 10.129.2.0/24
sudo nmap -sn -iL hosts.lst
sudo nmap -sn 192.168.0.1
sudo nmap -sn 192.168.0.1-250
sudo nmap -sn 192.168.0.1 192.168.0.2 192.168.0.5
```

### Arguments
- `-sn`: Disables port scan
- `-iL`: Uses a predefined list (e.g., hosts.lst)

### Use Case
- Works only if host firewalls allow ICMP responses.

---

## Host Discovery (PE ARP)

### Syntax
```bash
sudo nmap 192.168.0.1/24 -sn -oA tnet -PE --reason --disable-arp-ping
```

### Arguments
- `--PE`: Uses ICMP Echo requests.
- `--reason`: Displays the reason for results.
- `--disable-arp-ping`: Disables ARP ping.

### Use Case
- Useful in internal network scanning.
- ICMP-only scans are less reliable over the Internet.

---

## Port Scan Types

### Types
- Individually specified: `-p 22,25,80,139,445`
- By range: `-p 22-445`
- Top ports: `--top-ports=10`
- All ports: `-p-`
- Fast scan (top 100 ports): `-F`

### Default Scan
- Root: SYN scan `-sS`
- User: TCP connect scan `-sT`

### State Descriptions
- `open`: Connection to port established

