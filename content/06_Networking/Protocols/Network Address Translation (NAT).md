---
title: Network Address Translation (NAT)
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)

# Private vs. Public IP Addresses

`Public IP` addresses are globally unique identifiers assigned by Internet Service Providers (ISPs). Devices equipped with these IP addresses can be accessed from anywhere on the Internet, allowing them to communicate across the global network. For example, the IP address 8.8.8.8 is used for Google's DNS server, and 142.251.46.174 identifies one of Google’s web servers. These addresses ensure that devices can uniquely identify and reach each other over the internet.

`Private IP` addresses are designated for use within local networks such as homes, schools, and offices. These addresses are not routable on the global internet, meaning packets sent to these addresses are not forwarded by internet backbone routers. Defined by RFC 1918, common IPv4 private address ranges include 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255. This setup ensures that these private networks operate independently of the internet while facilitating internal communication and device connectivity.

#### What is NAT?

`Network Address Translation (NAT)` is a process carried out by a router or a similar device that modifies the source or destination IP address in the headers of IP packets as they pass through. This modification is used to translate the private IP addresses of devices within a local network to a single public IP address that is assigned to the router.


#### Types of NAT

To better understand Network Address Translation (NAT), It's helpful to know that there are several types of Network Address Translation (NAT), each designed for specific networking needs. Below are the different types of NAT.

|**Type**|**Description**|
|---|---|
|`Static NAT`|Involves a one-to-one mapping, where each private IP address corresponds directly to a public IP address.|
|`Dynamic NAT`|Assigns a public IP from a pool of available addresses to a private IP as needed, based on network demand.|
|`Port Address Translation (PAT)`|Also known as NAT Overload, is the most common form of NAT in home networks. Multiple private IP addresses share a single public IP address, differentiating connections by using unique port numbers. This method is widely used in home and small office networks, allowing multiple devices to share a single public IP address for internet access.|

#### Benefits and Trade-Offs

Network Address Translation (NAT) offers a number of benefits and presents some trade-offs as well.

| **Benefits**                                                                            | **Trade-Offs**                                                                                                         |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Conserves the limited IPv4 address space.                                               | Complex services like hosting a public server behind NAT can require additional configuration (e.g., port forwarding). |
| Provides a basic layer of security by not exposing internal network structure directly. | NAT can break certain protocols that rely on end-to-end connectivity without special handling.                         |
| Flexible for internal IP addressing schemes.                                            | Adds complexity to troubleshooting connectivity issues.                                                                |

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
