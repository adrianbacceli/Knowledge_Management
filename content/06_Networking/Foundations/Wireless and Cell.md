---
title: Wireless and Cell
draft: false
tags:
  - Wireless
  - Cell
  - Towers
  - Frequency
  - Foundations
  - Networking
  - Telco
  - Telecomunications
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)

# Cell Tower

A `cell tower` (or `cell site`) is a structure where antennas and electronic communications equipment are placed to create a cellular network cell. This `cell` in a cellular network refers to the specific area of coverage provided by a single cell tower, which is designed to seamlessly connect with adjacent cells created by other towers. Each tower covers a certain geographic area, allowing mobile phones (and other cellular-enabled devices) to send and receive signals.

Cell towers function through a combination of radio transmitters and receivers, which are equipped with antennas to communicate over specific radio frequencies. These towers are managed by Base Station Controllers (BSC), which oversee the operation of multiple towers. BSCs handle the transfer of calls and data sessions from one tower to another when users move across different cells. Finally, these towers are connected to the core network via backhaul links, which are typically fiber optic or microwave links.

Cell towers are differentiated by their coverage capacities and categorized primarily into `macro cells` and `micro/small cells`. Macro cells consist of large towers that provide extensive coverage over several kilometers, making them ideal for rural areas where wide coverage is necessary. On the other hand, micro and small cells are smaller installations typically located in urban centers. These towers are placed in densely populated areas and fill the coverage gaps left by macro cells. To better understand the concept of a cellular network, imagine we are on a road trip, streaming music on the phone. As we move, our phone switches from one cell tower to the next to maintain connection.

---

## Frequencies in Wireless Communications

As mentioned earlier, wireless communications utilize radio waves to enable devices to connect and communicate with each other. These radio waves are emitted at specific frequencies, known as oscillation rates, which are measured in hertz (Hz). Common frequency bands for wireless networks include:

|**Frequency Bands**|
|---|
|`1.` **2.4 GHz (Gigahertz)** – Used by older Wi-Fi standards (802.11b/g/n). Better at penetrating walls, but can be more prone to interference (e.g., microwaves, Bluetooth).|
|`2.` **5 GHz** – Used by newer Wi-Fi standards (802.11a/n/ac/ax). Faster speeds, but shorter range.|
|`3.` **Cellular Bands** – For 4G (LTE) and 5G. These range from lower frequencies (700 MHz) to mid-range (2.6 GHz) and even higher frequencies for some 5G services (up to 28 GHz and beyond).|

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
