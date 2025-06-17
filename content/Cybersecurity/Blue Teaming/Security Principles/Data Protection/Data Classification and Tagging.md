---
title: Data Classification and Tagging
draft: false
tags:
  - data-classification
  - tagging
  - PII
NeedsReview: false
---
> [!note]
> This content is adapted from a cloud security training video and formatted for knowledge base integration.

## Why Data Classification Matters

The last thing anyone wants is for their personal data to be leaked or stolen. As a cloud security professional, your role involves protecting sensitive information from unauthorized access.

---
## What is Data Classification?

**Data classification** is the process of analyzing data to determine its:

- **Sensitivity**
- **Type**
- **Value**

This categorization helps organizations efficiently secure and manage data.

### Sensitivity Levels

Data is generally categorized into three sensitivity levels:

#### 🟢 Low Sensitivity
- Low risk if exposed.
- Examples: Public blog posts, open-access content.

#### 🟡 Medium Sensitivity
- Not public, but not critically sensitive.
- Examples: Internal memos without personal or confidential data.

#### 🔴 High Sensitivity
- High risk and high value.
- Examples: Personal financial data, legal documents, SSNs, company secrets.

> [!warning]
> High sensitivity data requires the strongest security controls. Breaches may result in fines, legal consequences, and reputational damage.

---
## What Are Tags in Cloud Security?

**Tags** are custom metadata fields that help classify and manage data assets. They provide critical context, like:

- Who is responsible for the data
- Whether it contains sensitive data such as PII

### Example: PII Tag

A typical tag for Personally Identifiable Information (PII) might look like this:

```
label: PII  
bool: true  
type: SSN
```

> [!tip]
> The `bool` field is a Boolean type, meaning its value can be either `true` or `false`.

This tag indicates that the asset contains sensitive SSNs and should be treated with high security.

---
## Tag Templates and [[Identity & Access Management (IAM)|IAM]] Roles

You can streamline classification by using **tag templates**—reusable structures for consistent tagging.

Access to tag templates can be managed using **IAM roles** (Identity and Access Management), allowing or denying specific users the ability to assign or view sensitive tags.

> [!example]
> A tag template might include fields like `classification`, `owner`, `retention`, and `data-type`.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
