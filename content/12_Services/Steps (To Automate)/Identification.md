---
title: Identification
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---

# 1. Asset Type Classification

* Classify all the assets in the following types: 

| Infrastructure Asset  | Hardware                | Devices                          |
| --------------------- | ----------------------- | -------------------------------- |
|                       | Software                | Applications / subscriptions     |
|                       | Network (Infra)         | Routers, switches firewall       |
|                       | Installation (Location) | HVAC, Lightning, alarms, cameras |
|                       | Service Providers       | SaaS, Energy, Internet           |
|                       |                         |                                  |
| **Information Asset** | Information             |                                  |

---

# 2. Determine criticality

| Criticality | Score     |
| ----------- | --------- |
| High        | >2.31     |
| Medium      | 1.65-2.31 |
| Low         | <1.65     |

---
## Confidentiality, Integrity, and Availability

* Confidentiality: How secure should this information be kept.
* Integrity: How high is the impact if the data changes unintentionally
* Availability: How high is the impact if the asset becomes unavailable

| Confidentiality | Score |     | Integrity | Score |     | Availability |     |
| --------------- | ----- | --- | --------- | ----- | --- | ------------ | --- |
| Restricted      | 3     |     | High      | 3     |     | High         | 3   |
| Confidential    | 2     |     | Medium    | 2     |     | Medium       | 2   |
| Public          | 1     |     | Low       | 1     |     | Low          | 1   |



---
# 3. Classify ownership (BU)

Determine what are the multiple groups that live in the organization and own assets.

---
# Final: Inventory

| Serial | Group | Assigned | Owner (BU) | Description | C score | I score | A score | Criticality score |
| ------ | ----- | -------- | ---------- | ----------- | ------- | ------- | ------- | ----------------- |
|        |       |          |            |             |         |         |         |                   |

