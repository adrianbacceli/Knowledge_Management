---
title: Data Deduplication
draft: false
tags:
  - deduplication
  - Storage
  - Optimization
NeedsReview: false
---
> [!tip]  
> **Data Deduplication** reduces storage and bandwidth requirements by eliminating duplicate data segments across the backup system.

## Overview

Duplicate data in data centers can lead to increased storage costs, network bandwidth consumption, and extended backup windows. Deduplication mitigates these issues by identifying and removing redundant copies of data.

### Benefits

- Reduces storage footprint
- Minimizes network bandwidth usage
- Shortens backup windows
- Improves cost-efficiency of data protection

## Deduplication Types

### Source-Based Deduplication

> [!info]  
> Deduplication happens **before** data is transmitted to the backup system.

- Executed on the client or backup agent
- Reduces data load sent over the network
- Ideal for remote sites or bandwidth-constrained environments

### Target-Based Deduplication

> [!info]  
> Deduplication occurs **after** data reaches the backup target.

- Performed on the backup device
- Can be **inline** (during data write) or **post-process** (after data is written)
- Offloads computational burden from clients to backup infrastructure

## SISL Deduplication

The  deduplication engine called **Stream Informed Segment Layout (SISL)**, enabling efficient inline deduplication.

### SISL Architecture Highlights

> [!note]  
> SISL minimizes disk I/O operations by determining segment uniqueness before writing to disk.

- **Stream-Informed Segmentation:** Stream parsing defines segment boundaries effectively.
- **Fingerprinting:** Unique hash values generated for segments.
- **Filtering:** Checks if segments already exist to avoid duplication.
- **Local Compression:** Further compresses deduplicated data.
- **Save to Disk:** Only unique and compressed segments are written.

### Deduplication Steps in SISL

1. **Segmentation**
2. **Fingerprinting**
3. **Filtering**
4. **Local Compression**
5. **Save to Disk**

Source: Dell.com [‎Introduce Global compression and Local compression of Data Domain | DELL Technologies](https://www.dell.com/community/en/conversations/data-domain/introduce-global-compression-and-local-compression-of-data-domain/647f4d8af4ccf8a8de6463ce?msockid=1a5adc5008626217122ec9e909346332)

---
Penguinified by [Penguinify GPT](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
