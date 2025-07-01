---
title: Data Replication
draft: false
tags:
  - data-replication
  - disaster-recovery
  - snapshots
  - virtualization
NeedsReview: false
---
# Data Replication Overview


> [!info] **Why Replication Matters**  
> Data replication ensures business continuity, enables rapid recovery, and safeguards against data loss.

## 🧬 What Is Data Replication?

Replication creates exact copies of data for backup and disaster recovery (DR). These replicas can reside:

- Onsite (local replication)
- In remote data centers
- In the cloud

---
## 🔁 Local Replication

Local replication takes place within the same data center or storage system, allowing for fast data restores.

### 📸 Snapshots

> [!tip] Snapshots are space-efficient, virtual images of data at a specific point in time.

- Capture the state of files, VMs, or LUNs  
- Enable rapid restore without full duplication

#### 🧱 VM Snapshots
- Include VM memory, system state, and files
- Useful for testing, patching, or rollback scenarios

#### 📍 Storage Snapshots
- Pointer-based replicas that provide immediate access
- Do not duplicate the underlying data

### 🧬 Clones
- Fully populated, identical data copies
- Require synchronization before use

Types:
- **Full Clone:** Independent, complete copy
- **Linked Clone:** Derived from a snapshot, relies on parent data

---
## 🌐 Remote Replication

Remote replication protects against site failures and supports business continuity across geographic distances.

### 🔄 Synchronous Replication

> [!warning] Requires high bandwidth and low latency. Best for distances < 200 km.

- Data written simultaneously at both source and target
- Acknowledgment only after confirmation from both sites
- Delivers near-zero Recovery Point Objective (RPO)

### 🕒 Asynchronous Replication

> [!note] More flexible and cost-effective for long-distance replication.

- Source system acknowledges write immediately
- Data sent to replica site afterward
- Involves a finite RPO, based on replication interval

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
