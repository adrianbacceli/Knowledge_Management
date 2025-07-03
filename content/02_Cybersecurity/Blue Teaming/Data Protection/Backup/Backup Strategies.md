---
title: Backup Strategies
draft: false
tags:
  - backup
  - disaster-recovery
  - infrastructure
  - compliance
NeedsReview: false
---
## 💾 Backup Strategies

> [!warning] **Backups are Essential**  
> Data backups are critical for recovery from failure, ensuring compliance with regulations, and maintaining business continuity. Neglecting proper backups is a leading cause of data loss.

### Backup vs. Replica

- **Backups**:
    - Point-in-time copies stored separately from the production environment.
    - Optimized for long-term retention and historical recovery.
    - Typically used to restore data after corruption, accidental deletion, or disaster.

- **Replicas**:
    - Near real-time copies used primarily for high availability.
    - Shared resources; often remain online and accessible.
    - Ideal for failover but not a replacement for true backups.

> [!tip] Use backups for recovery and replicas for continuity. Both serve different but complementary roles.

### Types of Backup

- **Full**:
    - Captures all data at once.
    - Time-consuming and storage-intensive.
    - Forms the baseline for other backup types.

- **Incremental**:
    - Stores only changes since the last backup (full or incremental).
    - Fastest to perform, minimal storage.
    - Requires chaining for recovery.

- **Differential**:
    - Saves changes since the last full backup.
    - Larger than incremental but simpler to restore.

- **Single-file (Incremental)**:
    - Consolidated incremental backups into a single container.
    - Easier to manage and restore.

### Agent-Based Backup

- **Characteristics**:
    - Installed within guest OS.
    - Enables file-level and application-aware backups (e.g., databases, email).

- **Considerations**:
    - Higher impact on VM or host resources.
    - Greater flexibility for selective restores.

### Image-Based Backup

- **Characteristics**:
    - Captures entire VM disk and configuration.
    - Creates snapshots independent of the guest OS.

- **Use Cases**:
    - Fast full-system restores.
    - Disaster recovery scenarios.

> [!note] Image-based backups are typically mounted on a proxy server for processing and data transfer.

### Cloud-Based Backup (BaaS)

- **Benefits**:
    - On-demand scalability.
    - Reduced infrastructure overhead.
    - Integrated with cloud-native features (e.g., immutability, geo-redundancy).

- **Use Cases**:
    - Ideal for remote workforce and decentralized environments.
    - Supports compliance and long-term archival needs.


### Backup Architecture Overview

```text
Clients → Backup Server → Storage Node → Backup Device
```

- **Clients**: Endpoints or systems being backed up.
- **Backup Server**: Manages scheduling, indexing, and orchestration.
- **Storage Node**: Handles data transport and transformation.
- **Backup Device**: Final destination for storing backups (disk, tape, cloud).

> [!example] 
> In a typical enterprise setup, VMs are backed up via image-based tools to a central backup server, which then archives the data to a cloud provider or tape library for long-term storage.

For maximum resilience, combine multiple backup strategies tailored to your workload criticality, compliance obligations, and recovery time objectives (RTOs).

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
