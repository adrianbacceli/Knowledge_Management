---
title: ZeroTrace
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
ZeroTrace is a powerful ethical hacking tool for anonymization, developed in Bash. It helps you stay anonymous online by routing all of your system’s network traffic—not just browser traffic—through the Tor network. As a result, tracking your online activity, IP address, and location becomes extremely difficult.

In comparison to [[Proxychains]], that works by wrapping specific applications (like curl, nmap, etc.) to force their traffic through a SOCKS proxy (Tor) and only works if the application supports proxy settings or can be forced through LD_PRELOAD by prefixing each command (e.g., proxychains curl [ifconfig.me](http://ifconfig.me/)).  


[Zero Trace](https://github.com/s-r-e-e-r-a-j/ZeroTrace) Sets up iptables rules to transparently route all outgoing TCP and DNS traffic through Tor.  You don't need to modify individual commands — once started, the whole system’s traffic is routed.  Includes automatic Tor IP switching, location display, and supports auto mode with timed IP change.