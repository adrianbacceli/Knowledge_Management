---
title: Bash Networking
draft: false
tags:
  - Bash
  - shell
  - Commands
  - Networking
NeedsReview: false
---
# 1. Open SSH Tunnels in Linux shell

```bash

ssh -L 9876:192.168.100.110:443 root@10.60.9.46

```

#### Command composition

| Syntax           | Description                       |
| ---------------- | --------------------------------- |
| ssh              | Program to start Secure Shell     |
| -L               |                                   |
| :192.168.100.110 | ip address of the destination     |
| :443             | Port in the destination           |
| root             | username in the tunnel/jump serve |
| @10.60.9.46      | tunnel server                     |

---

# 2. Enable SSH Server on Linux

#### Check if openssh-server is installed
```bash

kali@kali:~$ dpkg -l | grep openssh-server
ii  openssh-server                         1:9.9p1-3                                amd64        secure shell (SSH) server, for secure access from remote machines

```

#### Check if telnet is allowed
``` bash

kali@kali:~$ telnet 127.0.0.1 22          
Trying 127.0.0.1...
telnet: Unable to connect to remote host: Connection refused

```

#### Check if the service is running
```
kali@kali:~$ service ssh status 
○ ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/usr/lib/systemd/system/ssh.service; disabled; preset: >
     Active: inactive (dead)
       Docs: man:sshd(8)
             man:sshd_config(5)
 
```


#### Start SSH service if it's not running
``` bash

kali@kali:~$ service ssh start 

```

#### Verify the service was successfully started
``` bash

kali@kali:~$ service ssh status
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/usr/lib/systemd/system/ssh.service; disabled; preset: >
     Active: active (running) since Wed 2025-06-18 18:06:51 EDT; 1s ago
 Invocation: f9b83328674d42bfb87bbc57ac93df1c
       Docs: man:sshd(8)
             man:sshd_config(5)
    Process: 242265 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0/SU>
   Main PID: 242268 (sshd)
      Tasks: 1 (limit: 2199)
     Memory: 2.1M (peak: 2.6M)
        CPU: 47ms
     CGroup: /system.slice/ssh.service
             └─242268 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startu>

Jun 18 18:06:51 kali systemd[1]: Starting ssh.service - OpenBSD Secure Shell>
Jun 18 18:06:51 kali sshd[242268]: Server listening on 0.0.0.0 port 22.
Jun 18 18:06:51 kali sshd[242268]: Server listening on :: port 22.
Jun 18 18:06:51 kali systemd[1]: Started ssh.service - OpenBSD Secure Shell >

```

---
# 3. DIG Diagnostic Tools
DNS Diagnostics (Dig)

Monday, June 26, 2023

9:50 AM

Attempt to use Dig instead of NSLookup

dig +noall +noedns +answer -x 127.0.0.1

dig +noall +noedns +answer localhost

Check a range (10.2.4.99-112)

for ((i=99; i<=112; i++)); do dig +noall +noedns +answer -x "10.2.4.$i"; done

Dig specify DNS server

dig @x.x.x.x +noall +noedns +answer localhost

Where x.x.x.x is the DNS IP address

---

# 4. Tcpdump
TCP DUMP

Tuesday, September 26, 2023

10:36 AM

tcpdumps -i la interface

Sample

root@avamar#: tcpdump -i any -n host datadomainipaddress and port (161 or 162 or 163) -vv

systadmin@datadomain#: se tcpdump -n host avamaripaddress and port (161 or 162 or 163) -vv

-n host | specifies the host ip/dns address
-n port | specifies the port address
grep | can be used to filter output
grep -v | can be used to exclude output
-w /path/to/file.pcap | can be used to specify output.pcap

---
# 5. Iperf

#### iperf server

```bash
iperf -s
```

#### IPerf client

```bash
iperf -c SourceIP -i 30 -t 300
```

Where
-c | is xxxxxx
-i | is xxxxxx
-t | is xxxxxx

---

# 6. ifconfig / route / ip

#### How to add ip address to eth
```bash
ifconfig add -i eth........ netmask ..
```

#### How to add routes and default gateway
```bash
route -add .......
```

Default
```bash
route -add default gw ......
```

#### ip (modern replacement for `ifconfig` and `route`)

##### Show interfaces
```bash
ip a
```

##### Show routes

``` bash
ip r
```
##### Add IP    
```bash
ip addr add 192.168.1.100/24 dev eth0
```

##### Add route
```bash
ip route add default via 192.168.1.1
```

---
# 7. Telnet / curl portest

#### Test port with telnet
```bash
telnet 127.0.0.1 22
```
where 
127.0.0.1 | this is the ip address
22 | this is the port 

#### Curl
```bash
curl -v ..... 127.0.0.1:22 ....
```

where
curl | ..
-v | ...
127.0.0.1 | ip address
22 | port

---
# 8. Netcat ([[Netcat|nc]])

Test TCP/UDP connections, listen on ports:
```bash
nc -zv 127.0.0.1 22
```

---
# 9. Netstat and SS

#### netstat _(deprecated, but still used)_

View open ports, connections, and routing tables:
```bash
netstat -tuln
```
#### ss _(modern replacement for netstat)_
```bash
ss -tuln
```

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
