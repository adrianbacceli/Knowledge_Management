---
title: RPO, RTO, and calculating Uptime
draft: false
tags:
  - RPO
  - RTO
  - recovery-objective
  - point
  - time
  - uptime
  - MTBF
  - MTTR
  - IA
  - Mean-Time-Between-Failure
  - Mean-Time-To-Recover
  - Inherent-Availability
NeedsReview: false
---
# 🔁 RPO vs RTO

|Term|Stands For|Meaning|Example|
|---|---|---|---|
|**RPO**|Recovery Point Objective|Maximum acceptable data loss (in time) during a failure|If RPO = 4 hours → You can lose up to 4 hours of data|
|**RTO**|Recovery Time Objective|Maximum acceptable time to restore service after an incident|If RTO = 2 hours → You must restore service within 2 hours|

> 💡 **RPO** is about **data** loss.  
> 💡 **RTO** is about **downtime** duration.

---

# 🧮 Uptime Calculation

**Uptime** is the percentage of time a system is operational over a specific period.

### 📌 Formula:

```
Uptime (%) = [(Total Time - Downtime) / Total Time] × 100
```

### 📅 Example:

- You want to calculate **monthly uptime**.
- **Month length** = 30 days → 30 × 24 = **720 hours**
- If the system was down for **3 hours**, then:

```
Uptime = [(720 - 3) / 720] × 100 = (717 / 720) × 100 ≈ 99.58%
```

---
# 💎 Common Uptime Targets

|Uptime %|Max Downtime/Month|Max Downtime/Year|
|---|---|---|
|99%|~7.2 hours|~3.65 days|
|99.9%|~43.8 minutes|~8.76 hours|
|99.99%|~4.38 minutes|~52.56 minutes|
|99.999%|~26.3 seconds|~5.26 minutes|

---
# 🧠 Key Metrics: MTBF, MTTR, and IA


## 🔧 **MTBF (Mean Time Between Failures)**

- **Definition**: Average time a system operates _without failure_.
- **Formula**:
```
MTBF = Total Uptime / Number of Failures
```

- **Example**:  If a server runs for **1,000 hours** and fails **4 times**:
```
MTBF = 1,000 / 4 = 250 hours
```
   
---

## 🛠️ **MTTR (Mean Time To Repair)**

- **Definition**: Average time taken to restore a system after failure.
- **Formula**:
```
MTTR = Total Downtime / Number of Failures
```

- **Example**: If the total downtime across 4 failures is **8 hours**:
```
MTTR = 8 / 4 = 2 hours
```
   
---

### 💡 **IA (Inherent Availability)**

- **Definition**: Ratio of uptime to total time (uptime + downtime).
- **Formula**:
```
IA = MTBF / (MTBF + MTTR)
= Uptime / (Uptime + Downtime)
```
   
- **Example**: Using values above (MTBF = 250, MTTR = 2):
```
IA = 250 / (250 + 2) ≈ 0.992 or 99.2%
```
   
---
## 🧮 Summary Table

| Metric   | Meaning                    | Formula                | Goal                 |
| -------- | -------------------------- | ---------------------- | -------------------- |
| **MTBF** | Mean time between failures | `Uptime / Failures`    | Higher = Better      |
| **MTTR** | Mean time to repair        | `Downtime / Failures`  | Lower = Better       |
| **IA**   | Inherent Availability      | `MTBF / (MTBF + MTTR)` | Closer to 1 = Better |

- **RPO** tells you _how much data_ you can afford to lose.
- **RTO** tells you _how quickly_ systems must be recovered.
- **Uptime** reflects _how reliable_ the system is.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
