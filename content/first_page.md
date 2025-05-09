---
title: Cyber Kill Chain and Tools
draft: false
tags:
  - example-tag
---
 
Attack lifecycle (a.k.a. the cyber kill chain)


Recoinasance: Target choosing and Information Gathering

-   Pasive Recoinasance
    -   Instagram
    -   LinkedIn
    -   Websites
    -   Job Ads
    -   Company Partners

-   Active Recoinasance
    -   Scanning
    -   Enumeration

Weaponization: Malware crafting and embedding to Exploit/Deliverable

-   Gathering inteligence of AV / EDR
-   Lightweight code crafting with Remote Access capabilities and persistance
-   Allow the deploy of additional tools on demand

Delivery: Attack Vectors

-   Traditional approaches:
    -   Phishing attachment
    -   Phishing link containing the exploit
    -   Phishing link hosting the malicious payload
    -   Social Engineering calls
    -   Physical storage tools left around

Exploitation: Deliverable was triggered and attacker attempts to run code.

Installation: Attacker infiltration

-   Droppers: Small code that installs malware
-   Backdoors: Persistent access from exploitation or delivered by Dropper
-   Rootkit: Malware hidding under the system root

Command and Control:

-   Compromised system is controlled.

**** At this point, Lateral movement is expected to restart the chain on a new system

Action: The objective of the attack is excecuted.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjI0NjgzODUyXX0=
-->