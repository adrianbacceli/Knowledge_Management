---
title: 
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---

# 🧠 SQL vs. NoSQL: Core Differences

## 1. **Data Model**

### SQL (Relational)

- Structured, tabular data with fixed schemas
- Tables, rows, columns, and relationships (foreign keys)

### NoSQL

- Flexible, schema-less or dynamic schema
- Four main types:
    1. **Document** (e.g., MongoDB, Couchbase)
    2. **Key-Value** (e.g., Redis, DynamoDB)
    3. **Column-Family** (e.g., Cassandra, HBase)
    4. **Graph** (e.g., Neo4j, ArangoDB)

---

## 2. **Schema**

### SQL

- Rigid schema: must define tables and columns before inserting data

### NoSQL

- Schema-on-read: structure can vary between records
- Ideal for evolving or semi-structured data

---

## 3. **Query Language**

### SQL

- Uses standardized SQL syntax

### NoSQL

- Varies by database:
    - MongoDB uses a JSON-like query language
    - Cassandra uses CQL (Cassandra Query Language)
    - Redis uses command-line operations

---

## 4. **Scalability**

### SQL

- Vertical scaling (scale-up: more CPU/RAM)
- Some support for horizontal scaling (e.g., sharding in PostgreSQL)

### NoSQL

- Designed for horizontal scaling (scale-out: more nodes)
- Built for distributed systems and large-scale applications

---

## 5. **Transactions and Consistency**

### SQL

- Strong ACID compliance (Atomicity, Consistency, Isolation, Durability)

### NoSQL

- Often BASE (Basically Available, Soft state, Eventually consistent)
- Some NoSQL databases now support ACID transactions (e.g., MongoDB 4.0+)

---

## 6. **Use Cases**

### SQL

- Financial systems, ERP, CRM, structured reporting

### NoSQL

- Real-time analytics, IoT, content management, social networks, caching, big data

---

## 7. **Examples**

|Type|SQL Databases|NoSQL Databases|
|---|---|---|
|Relational|MySQL, PostgreSQL|—|
|Document|—|MongoDB, Couchbase|
|Key-Value|—|Redis, Amazon DynamoDB|
|Column-Family|—|Apache Cassandra, HBase|
|Graph|—|Neo4j, Amazon Neptune|

---

## 🧭 When to Use What?

- **Use SQL** when your data is highly structured, relationships are important, and consistency is critical.
- **Use NoSQL** when you need flexibility, high scalability, or are dealing with large volumes of semi-structured or unstructured data.

---
# Learning objectives

## 🧱 1. **Data Modeling Paradigms**

Unlike SQL’s normalized, relational model, NoSQL encourages **denormalization** and **embedding**.

- **Document databases** (e.g., MongoDB): Learn how to model nested documents and arrays.
- **Key-value stores**: Understand how to design keys for fast access.
- **Column-family stores**: Learn about wide rows and partition keys.
- **Graph databases**: Learn about nodes, edges, and traversals.

> 📌 _You’ll need to think in terms of access patterns first, not normalization._

---

## 🔍 2. **Query Languages and APIs**

Each NoSQL system has its own query language or API:

- MongoDB: JSON-like query syntax
- Cassandra: CQL (similar to SQL but with key differences)
- Redis: Command-based interface
- Neo4j: Cypher query language for graph traversal

> 📌 _You’ll need to learn how to express queries in these new syntaxes and understand their limitations._

---

## ⚖️ 3. **Consistency Models**

NoSQL databases often trade strict consistency for availability and partition tolerance (CAP theorem).

- **Eventual consistency**
- **Tunable consistency** (e.g., Cassandra’s consistency levels)
- **Strong consistency** (some NoSQL DBs support it optionally)

> 📌 _You’ll need to understand how to manage data correctness in distributed systems._

---

## 🧮 4. **Indexing and Performance**

Indexing in NoSQL is often **manual and query-specific**:

- MongoDB: Compound indexes, text indexes, geospatial indexes
- Cassandra: Secondary indexes vs. materialized views
- Redis: Indexing is often done at the application level

> 📌 _You’ll need to design indexes based on your query patterns, not just schema._

---

## 🔄 5. **Replication and Sharding**

NoSQL systems often come with **built-in horizontal scaling**:

- **Sharding**: Partitioning data across nodes
- **Replication**: Copying data for fault tolerance
- **Consistency trade-offs**: How replicas sync and resolve conflicts

> 📌 _You’ll need to understand how data is distributed and how to manage it._

---

## 🧰 6. **Tooling and Ecosystem**

Each NoSQL system has its own ecosystem:

- MongoDB Compass, Atlas
- RedisInsight
- Cassandra’s nodetool and CQLSH
- Neo4j Browser and Bloom

> 📌 _You’ll need to learn new tools for monitoring, querying, and managing data._

---

## 🧠 7. **Use Case-Driven Design**

NoSQL is often **use-case specific**:

- Real-time analytics → Cassandra
- Caching → Redis
- Content management → MongoDB
- Social networks → Neo4j

> 📌 _You’ll need to match the right NoSQL type to the problem you're solving._

