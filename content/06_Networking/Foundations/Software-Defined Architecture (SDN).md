---
title: Software-Defined Architecture (SDN)
draft: false
tags:
  - SDDC
  - SDN
  - Software-Defined
  - Networking
  - Foundations
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)
# Software-Defined Architecture (SDN)

`Software-Defined Networking (SDN)` is a modern networking approach that separates the control plane, which makes decisions about where traffic is sent, from the data plane, which actually forwards the traffic. Traditionally, network devices like routers and switches housed both of these planes. However, in SDN, the control plane is centralized within a software-based controller. This configuration allows network devices to simply execute instructions they receive from the controller. SDN provides a programmable network management environment, enabling administrators to dynamically adjust network policies and routing as required. This separation makes the network more flexible and improves how it's managed.

![Network diagram: Remote Servers connect to Internet, then SDN Switches, SDN Controller, and Users, linking to Laptop, PC, Smartphone.](https://academy.hackthebox.com/storage/modules/289/Internet_Arch_Models/Software-Defined_Arch-1.png)

Large enterprises or cloud providers use SDN to dynamically allocate bandwidth and manage traffic flows according to real-time demands. Below is a table with the advantages and disadvantages of the Software-Defined architecture.

|**Advantage**|**Description**|
|---|---|
|`Centralized control`|Simplifies network management.|
|`Programmability & Automation`|Network configurations can be changed quickly through software instead of manually configuring each device.|
|`Scalability & Efficiency`|Can optimize traffic flows dynamically, leading to better resource utilization.|

|**Disadvantage**|**Description**|
|---|---|
|`Controller Vulnerability`|If the central controller goes down, the network might be adversely affected.|
|`Complex Implementation`|Requires new skill sets and specialized software/hardware.|
---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
