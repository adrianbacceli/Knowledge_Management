---
title: NIST SP 800-53 Rev. 5 Control Families (RMF)
draft: false
tags:
  - NIST
  - security-controls
  - SP800-53
  - compliance
  - reference
NeedsReview: false
---

# NIST SP 800-53 Rev. 5: Risk Management Framework

> [!note] 
> The Risk Management Framework (RMF) provides a structured process for integrating security, privacy, and risk management activities into the system development lifecycle.

### 1. Prepare

**Understand Requirements**: Begin by thoroughly understanding the security and privacy requirements relevant to your organization. This includes federal guidelines, organizational policies, and specific compliance needs.

### 2. Categorize Information Systems

**Determine Impact Levels**: Categorize information systems based on the potential impact of a security breach (low, moderate, or high). This helps in selecting the appropriate baseline controls.

### 3. Select Controls

**Identify Control Baselines**: Select the initial set of controls from the NIST 800-53 catalog that matches the determined impact level.

**Tailor Controls**: Tailor the selected controls based on specific organizational needs and the results of the risk assessment. Tailoring includes adding, modifying, or removing controls to fit your specific environment.

### 4. Implement Controls

**Deploy Controls**: Implement the selected and tailored controls within your information systems. This involves making technical configurations, establishing policies, and conducting training.

### 5. Assess Controls

**Test and Evaluate**: Conduct assessments to ensure that controls are implemented properly and functioning as intended. This involves testing the effectiveness of controls through techniques such as vulnerability scanning, penetration testing, and security reviews.

### 6. Authorize System

**Confirm Risk Acceptance**: Obtain official management approval (authorization) to operate the information system, which includes accepting any residual risks identified during the assessment phase.

### 7. Monitor Controls

**Continuous Monitoring**: Continuously monitor the security and privacy controls to ensure they remain effective over time. This includes regular audits, control assessments, and performance analysis.

**Respond to Changes**: Adapt controls and security measures in response to new threats, vulnerabilities, or changes in the system’s operating environment.

### 8. Document

**Maintain Documentation**: Keep detailed documentation of the controls, risk assessments, implementation steps, and monitoring activities. Ensure all processes and results are well-documented to support continuous improvement and compliance efforts.

### 9. Review and Update

**Periodic Review**: Regularly review the effectiveness of controls and update them as necessary to respond to evolving risks and changes in technology or organizational processes.


---
# NIST SP 800-53 Rev. 5 Control Families

> [!note]  
> This document outlines the 20 control families defined in NIST Special Publication 800-53 Revision 5. Each control family consists of related controls grouped under a common thematic identifier.

## Control Family Identifiers

|Identifier|Family Name|
|---|---|
|AC|Access Control|
|AT|Awareness and Training|
|AU|Audit and Accountability|
|CA|Assessment, Authorization, and Monitoring|
|CM|Configuration Management|
|CP|Contingency Planning|
|IA|Identification and Authentication|
|IR|Incident Response|
|MA|Maintenance|
|MP|Media Protection|
|PE|Physical and Environmental Protection|
|PL|Planning|
|PM|Program Management|
|PS|Personnel Security|
|PT|PII Processing and Transparency|
|RA|Risk Assessment|
|SA|System and Services Acquisition|
|SC|System and Communications Protection|
|SI|System and Information Integrity|
|SR|Supply Chain Risk Management|

> [!tip]  
> Use these identifiers as anchors when referencing or implementing specific control requirements in compliance documentation and system security plans (SSPs).


---

## **Audit Sample**
### NIST SP 800-53 compliance report

| Control Family | Finding Categories                   | Severity | Description                                                                                | Affected Resource(s)                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------ | -------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-2           | PUBLIC_BUCKET_ACL                    | HIGH     | Cloud Storage buckets should not be anonymously or publicly accessible.                    | 0                                                                                                                                                                                                                                                                      |
| AC-2           | PUBLIC_DATASET                       | HIGH     | Datasets should not be publicly accessible by anyone on the internet.                      | 0                                                                                                                                                                                                                                                                      |
| AC-2 AU-2      | AUDIT_LOGGING_DISABLED               | LOW      | Cloud Audit Logging should be configured properly across all services and all users.       | 0                                                                                                                                                                                                                                                                      |
| AC-3           | NON_ORG_IAM_MEMBER                   | HIGH     | Corporate login credentials should be used instead of Gmail accounts.                      | 0                                                                                                                                                                                                                                                                      |
| AC-3           | SQL_NO_ROOT_PASSWORD                 | HIGH     | MySQL database instance should not allow anyone to connect with administrative privileges. | 0                                                                                                                                                                                                                                                                      |
| AC-5           | KMS_ROLE_SEPARATION                  | MEDIUM   | Enforce separation of duties when assigning KMS-related roles.                             | 0                                                                                                                                                                                                                                                                      |
| AC-5           | SERVICE_ACCOUNT_ROLE_SEPARATION      | MEDIUM   | Enforce separation of duties when assigning service account-related roles.                 | 0                                                                                                                                                                                                                                                                      |
| AC-6           | FULL_API_ACCESS                      | MEDIUM   | Avoid using default service account with full Cloud API access.                            | cymbal-apps@appspot.gserviceaccount.com                                                                                                                                                                                                                                |
| AC-6           | OVER_PRIVILEGED_SERVICE_ACCOUNT_USER | MEDIUM   | Avoid project-level assignment of iam.serviceAccountUser and TokenCreator roles.           | 0                                                                                                                                                                                                                                                                      |
| AC-6           | PRIMITIVE_ROLES_USED                 | MEDIUM   | Avoid using basic roles (owner, writer, reader) due to excessive permissions.              | 0                                                                                                                                                                                                                                                                      |
| AC-6 SC-7      | OVER_PRIVILEGED_ACCOUNT              | MEDIUM   | Avoid using default service accounts for [[Kubernetes]] project access.                        | 0                                                                                                                                                                                                                                                                      |
| AC-6 SC-12     | KMS_PROJECT_HAS_OWNER                | MEDIUM   | Avoid granting 'Owner' permissions on projects managing cryptographic keys.                | 0                                                                                                                                                                                                                                                                      |
| AU-9           | PUBLIC_LOG_BUCKET                    | HIGH     | Log sink storage buckets should not be publicly accessible.                                | 0                                                                                                                                                                                                                                                                      |
| AU-11          | LOCKED_RETENTION_POLICY_NOT_SET      | LOW      | Configure locked retention policies for Cloud Storage buckets.                             | 0                                                                                                                                                                                                                                                                      |
| AU-11          | OBJECT_VERSIONING_DISABLED           | LOW      | Enable object versioning on log-buckets.                                                   | 0                                                                                                                                                                                                                                                                      |
| CA-3 SC-7      | PUBLIC_IP_ADDRESS                    | HIGH     | VMs should not be assigned public IP addresses.                                            | instance-1, instance-2                                                                                                                                                                                                                                                 |
| CA-3 SC-7      | PUBLIC_SQL_INSTANCE                  | HIGH     | Cloud SQL instances should not be publicly accessible.                                     | 0                                                                                                                                                                                                                                                                      |
| CP-9           | AUTO_BACKUP_DISABLED                 | MEDIUM   | Enable automated backups.                                                                  | 0                                                                                                                                                                                                                                                                      |
| IA-2           | MFA_NOT_ENFORCED                     | HIGH     | Enable MFA for all users.                                                                  | 5 user accounts<br>- hank-test-sa@qwiklabs-gcp-02-7a85c4c9f838.iam.gserviceaccount.com <br>- student-04-d59e5982c302@qwiklabs.net, <br>- student-04-ea1e7413a585@qwiklabs.net, <br>- student-04-67ef31344d65@qwiklabs.net, <br>- student-04-f599eb60fb0e@qwiklabs.net  |
| SC-7           | NETWORK_POLICY_DISABLED              | MEDIUM   | Enable network policies on [[Kubernetes]] Engine clusters.                                     | 0                                                                                                                                                                                                                                                                      |
| SC-7           | OPEN_CASSANDRA_PORT                  | HIGH     | Block public access to ports used by Cassandra.                                            | 0                                                                                                                                                                                                                                                                      |
| SC-7           | OPEN_CISCOSECURE_WEBSM_PORT          | HIGH     | Block public access on TCP port 9090.                                                      | 0                                                                                                                                                                                                                                                                      |
| SC-7           | OPEN_DIRECTORY_SERVICES_PORT         | HIGH     | Block public access to port 445.                                                           | 0                                                                                                                                                                                                                                                                      |
| SC-7           | OPEN_DNS_PORT                        | HIGH     | Block public access to TCP/UDP port 53.                                                    | 0                                                                                                                                                                                                                                                                      |

---

## **Remediation Sample**
### Compliance report notes

| Security Control | Severity | Findings                                                                                                                                                                                                                                                                                                                                     | Recommendations                                                                                                                                               |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-3             | HIGH     | VMs instance-1, instance-2 have p                                                                                                                                                                                                                                                                                                            | Use a DMZ to isolate public traffic from internal traffic. Implement NAT with proxies or VPNs. Block all public incoming traffic except for known exc Multiple user accounts do not have Multi-Factor Authentication enabled:<br>- hank-test-sa@qwiklabs-gcp-02-7a85c4c9f838.iam.gserviceaccount.com <br>- student-04-d59e5982c302@qwiklabs.net, <br>- student-04-ea1e7413a585@qwiklabs.net, <br>- student-04-67ef31344d65@qwiklabs.net, <br>- student-04-f599eb60fb0e@qwiklabs.net  et  et  et  et  et  et  et  et  et  et  et  et  et  et  | Enforce MFA for all users. Automate policy enforcement via scripting and monitoring.                                                                          |
| SC-7             | HIGH     | VMs i                                                                                                                                                                                                                                                                                                                                        | Same as CA-3: Isolate via DMZ, use NAT, block unapproved public access.                                                                                       |
| AC-6             | MEDIUM   | Instances configured to use the default service account cymba                                                                                                                                                                                                                                                                                | Disable default account. Use least-privilege accounts for each instance.                                                                                      |
For more detailed control requirements, refer directly to [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).



---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)