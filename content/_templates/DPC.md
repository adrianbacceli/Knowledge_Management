---
title: 
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
# **1. `msm-ui-main: active`**

- **Role**: This is the **main user interface service**.
- **Function**: Serves the web-based dashboard and UI components that users interact with.
- **Depends on**: ELG for routing, IAM for authentication, and backend services for data.


# **2. `msm-monitor: active`**

- **Role**: **Monitoring and metrics collection** service.
- **Function**: Gathers health, performance, and usage metrics from DPC and connected systems (e.g., Avamar, NetWorker).
- **Feeds into**: UI dashboards, alerts, and reports.

# **3. `msm-elg: active 
## 🔍 **What is ELG (Elemental Gateway)?**

The **Elemental Gateway (ELG)** in **Dell Data Protection Central (DPC)** is a **proprietary service** that plays a critical role in the internal architecture of Dell’s data protection ecosystem. Here's a detailed breakdown of what ELG does and how it fits into the broader system:

**ELG** is a **middleware service** within **Dell’s Data Protection Central (DPC)**, which is part of the **Integrated Data Protection Appliance (IDPA)**. It acts as a **communication and orchestration layer** between various microservices and components in the DPC environment.

---

### 🧩 **Core Functions of ELG**

1. **Service Communication Hub**  
    ELG facilitates **inter-service communication** between DPC components such as:
    
    - Monitoring services
    - User interface services
    - Authentication and authorization modules (e.g., IAM)
    - Data ingestion and reporting tools
2. **Data Routing and Transformation**  
    It handles **data routing**, **format transformation**, and **protocol mediation** between services that may not natively speak the same language or format.
    
3. **Security Enforcement**  
    ELG enforces **security policies**, such as:
    
    - Validating tokens and credentials
    - Ensuring secure API calls between services
    - Managing access control for internal APIs
4. **Service Discovery and Load Balancing**  
    It may also assist in **service discovery**, helping DPC components locate each other dynamically, and **load balancing** requests across multiple instances of services.
    
5. **Logging and Diagnostics**  
    ELG logs service interactions and errors, which is crucial for **troubleshooting** and **performance monitoring**.
    

---

### ⚠️ **Common Issues with ELG**

- **Startup Failures**: ELG may fail to start due to **Java permission issues**, especially after upgrades 
- **Dependency Failures**: If ELG is down, other services like the **monitoring dashboard** or **UI components** may also fail to initialize.
- **Version Compatibility**: ELG is tightly coupled with specific DPC and IDPA versions, so mismatches can cause failures.

---

### 🛠️ **Troubleshooting ELG**
- Check logs in `/logs/elg/elg.out` for Java or permission errors.
- Ensure the correct Java version is configured and accessible.
- Apply the latest **DPC OS updates** to resolve known bugs 

---

### 🧠 Summary

|Feature|Description|
|---|---|
|**Type**|Proprietary middleware service|
|**Role**|Communication, orchestration, and security enforcement|
|**Location**|Runs as `msm-elg` service in DPC|
|**Dependencies**|Java, IAM, other DPC microservices|
|**Criticality**|High – required for full DPC functionality|

---
# **4. `mongod: active`**

- **Role**: **MongoDB database service**.
- **Function**: Stores configuration data, user preferences, service metadata, and possibly monitoring data.
- **Used by**: UI, Monitor, IAM, and other services.

# **5. `rabbitmq-server: active`**

- **Role**: **Message broker**.
- **Function**: Enables asynchronous communication between services using queues and topics.
- **Used for**: Event-driven tasks, background jobs, and service coordination.

# **6. `nginx: active`**

- **Role**: **Web server and reverse proxy**.
- **Function**: Handles HTTP/S traffic, SSL termination, and proxies requests to ELG or UI services.
- **Frontline**: First point of contact for external users.

---

#  **7. `dp-iam: active`**

- **Role**: **Identity and Access Management**.
- **Function**: Manages user authentication, roles, permissions, and tokens.
- **Integrated with**: ELG, UI, and external identity providers (LDAP, SSO).



```graph TD
    subgraph DPC_Services
        nginx["nginx: active"]
        msm_elg["msm-elg: active"]
        dp_iam["dp-iam: active"]
        msm_ui_main["msm-ui-main: active"]
        msm_monitor["msm-monitor: active"]
        mongod["mongod: active"]
        rabbitmq_server["rabbitmq-server: active"]
        FIPS["FIPS: disabled"]
    end

    nginx --> msm_elg
    msm_elg --> dp_iam
    dp_iam --> msm_elg
    msm_elg --> msm_ui_main
    msm_elg --> msm_monitor
    msm_ui_main --> mongod
    msm_monitor --> mongod
    msm_ui_main --> rabbitmq_server
    msm_monitor --> rabbitmq_server
```

