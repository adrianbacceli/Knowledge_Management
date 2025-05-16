---
title: 
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---

Found UniFi Networks vuln
[https://10.129.129.190:8443/](https://10.129.129.190:8443/)
Version 6.4.54 | CVE-2021-44228

Ports enumeration as quick as possible:
$ sudo nmap -sS -v4 -T5 -p 1-65535 10.129.129.190
PORT STATE SERVICE REASON
22/tcp open ssh syn-ack ttl 63
6789/tcp open ibm-db2-admin syn-ack ttl 63
8080/tcp open http-proxy syn-ack ttl 63
8443/tcp open https-alt syn-ack ttl 63
8843/tcp open unknown syn-ack ttl 63
8880/tcp open cddbp-alt syn-ack ttl 63