---
title: DHCP
draft: false
tags:
  - DORA
  - DHCP
  - Networking
  - Foundations
  - Protocols
  - IP
  - Assignment
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)

# DHCP DORA Process 

DORA process:

| **Step**         | **Description**                                                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1. Discover`    | When a device connects to the network, it broadcasts a **DHCP Discover** message to find available DHCP servers.                                                                        |
| `2. Offer`       | DHCP servers on the network receive the discover message and respond with a **DHCP Offer** message, proposing an IP address lease to the client.                                        |
| `3. Request`     | The client receives the offer and replies with a **DHCP Request** message, indicating that it accepts the offered IP address.                                                           |
| `4. Acknowledge` | The DHCP server sends a **DHCP Acknowledge** message, confirming that the client has been assigned the IP address. The client can now use the IP address to communicate on the network. |
![DORA Process | Hack The Box](https://academy.hackthebox.com/storage/modules/289/DHCP/DHCP-2.png)
Source: Hack The Box | [Network Foundations](https://academy.hackthebox.com/module/289/section/3239)

# DHCP Frame
![](https://crnetpackets.com/wp-content/uploads/2017/04/dhcp-basics-initial2.png?w=780&h=434)

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
