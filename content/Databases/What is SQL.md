---
title: What is SQL
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
# SQL Topics and Subtopics

## 1. Introduction to SQL

### 1.1 What is SQL?

### 1.2 Relational Databases vs. Non-Relational

### 1.3 SQL Dialects (MySQL, PostgreSQL, SQL Server, Oracle)

---
## 2. SQL Basics

### 2.1 SQL Syntax and Conventions

### 2.2 Data Types
1. Numeric
2. String/Text
3. Date/Time
4. Boolean
5. Binary

### 2.3 Basic Queries
1. `SELECT`
2. `FROM`
3. `WHERE`
4. `ORDER BY`
5. `LIMIT` / `OFFSET`

---

## 3. Data Manipulation Language (DML)

### 3.1 Inserting Data
- `INSERT INTO`

### 3.2 Updating Data
- `UPDATE`

### 3.3 Deleting Data
- `DELETE`


---

## 4. Data Querying

### 4.1 Filtering
- `WHERE`, `IN`, `BETWEEN`, `LIKE`, `IS NULL`

### 4.2 Sorting
- `ORDER BY`

### 4.3 Aliases
- `AS` keyword

---

## 5. Joins and Relationships

### 5.1 Types of Joins

1. `INNER JOIN`
2. `LEFT JOIN`
3. `RIGHT JOIN`
4. `FULL OUTER JOIN`
5. `CROSS JOIN`

### 5.2 Self Joins

### 5.3 Using Aliases in Joins

### 5.4 Join Conditions and ON Clauses

---
## 6. Aggregation and Grouping

### 6.1 Aggregate Functions

1. `COUNT()`
2. `SUM()`
3. `AVG()`
4. `MIN()`
5. `MAX()`

### 6.2 `GROUP BY`

### 6.3 `HAVING`

---

## 7. Subqueries

### 7.1 Inline Subqueries

### 7.2 Correlated Subqueries

### 7.3 Subqueries in `SELECT`, `FROM`, `WHERE`

---

## 8. Set Operations

### 8.1 `UNION` and `UNION ALL`

### 8.2 `INTERSECT`

### 8.3 `EXCEPT` / `MINUS`

---

## 9. Data Definition Language (DDL)

### 9.1 Creating Tables
- `CREATE TABLE`

### 9.2 Altering Tables
- `ALTER TABLE`

### 9.3 Dropping Tables
- `DROP TABLE`

### 9.4 Constraints
1. `PRIMARY KEY`
2. `FOREIGN KEY`
3. `UNIQUE`
4. `NOT NULL`
5. `CHECK`
6. `DEFAULT`

---
## 10. Views

### 10.1 Creating Views

### 10.2 Updating Views

### 10.3 Dropping Views

---

## 11. Indexes

### 11.1 Creating Indexes

### 11.2 Unique Indexes

### 11.3 Composite Indexes

### 11.4 Index Performance Considerations

---
## 12. Transactions and Concurrency

### 12.1 Transactions
- `BEGIN`, `COMMIT`, `ROLLBACK`

### 12.2 ACID Properties

### 12.3 Isolation Levels

### 12.4 Locks and Deadlocks

---
## 13. Advanced SQL

### 13.1 Window Functions
1. `ROW_NUMBER()`
2. `RANK()`, `DENSE_RANK()`
3. `LEAD()`, `LAG()`
4. `NTILE()`
5. `OVER()` clause

### 13.2 Common Table Expressions (CTEs)
- `WITH` clause

### 13.3 Recursive Queries

### 13.4 Pivoting and Unpivoting Data

---

## 14. SQL Performance Tuning

### 14.1 Query Optimization

### 14.2 Execution Plans

### 14.3 Index Usage

### 14.4 Avoiding Common Pitfalls (e.g., N+1 queries)

---
## 15. Security and Permissions

### 15.1 User Roles and Privileges

### 15.2 GRANT and REVOKE

### 15.3 SQL Injection and Prevention

---
## 16. Integration and Tools

### 16.1 SQL in Python (e.g., `sqlite3`, `SQLAlchemy`, `pandas`)

### 16.2 SQL in BI Tools (e.g., Power BI, Tableau)

### 16.3 SQL Clients (e.g., DBeaver, pgAdmin, MySQL Workbench)

## 17. Information Schema and Metadata Queries

**What is `INFORMATION_SCHEMA`?**

> [!info] INFORMATION_SCHEMA in SQL
> `INFORMATION_SCHEMA` is a **system database** found in many **SQL-based relational database management systems (RDBMS)**.
> It provides **read-only access** to metadata (data about data), such as:
> - Tables
> - Columns
> - Data types
> - Constraints
> - Views
> - Stored procedures

> [!question] Is INFORMATION_SCHEMA only for SQL?
> **Yes**, it is part of the **SQL standard** and used in:
> - MySQL / MariaDB
> - PostgreSQL
> - SQL Server
> - Oracle (partially)
> 
> **No**, it is not used in **NoSQL** databases like MongoDB, Redis, or Cassandra. These systems have their own ways to inspect metadata.

---
### **Using `INFORMATION_SCHEMA` with SQL Commands**

You can use SQL commands like `SELECT` and `SHOW` to access metadata.
#### Example:

> [!example] Using INFORMATION_SCHEMA with SQL Commands
> ```sql
> SELECT COLUMN_NAME, DATA_TYPE
> FROM INFORMATION_SCHEMA.COLUMNS
> WHERE TABLE_NAME = 'your_table';
> ```

---
### **Comparison Table: Standard Name vs SHOW Command**

| **Standard Name**   | **SHOW Command**                                 | **Remarks**                                           |
| ------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| `SCHEMATA`          | `SHOW DATABASES`                                 | Lists all databases (schemas).                        |
| `TABLES`            | `SHOW TABLES`                                    | Lists all tables in a database.                       |
| `COLUMNS`           | `SHOW COLUMNS FROM`                              | Shows column details like data type and nullability.  |
| `TABLE_CONSTRAINTS` | _(No direct equivalent)_                         | Shows constraints like primary keys and foreign keys. |
| `KEY_COLUMN_USAGE`  | _(No direct equivalent)_                         | Shows which columns are used in constraints.          |
| `VIEWS`             | `SHOW FULL TABLES`                               | Includes views along with tables.                     |
| `ROUTINES`          | `SHOW PROCEDURE STATUS` / `SHOW FUNCTION STATUS` | Lists stored procedures and functions.                |
| `TRIGGERS`          | `SHOW TRIGGERS`                                  | Lists triggers in the database.                       |
| `USER_PRIVILEGES`   | `SHOW GRANTS`                                    | Shows user privileges.                                |


1. `INFORMATION_SCHEMA` views
    - `TABLES`, `COLUMNS`, `SCHEMATA`, `KEY_COLUMN_USAGE`, etc.
2. Querying metadata about:
    - Table structures
    - Column data types
    - Indexes and constraints
3. Vendor-specific alternatives:
    - PostgreSQL: `pg_catalog`
    - SQL Server: `sys.objects`, `sys.columns`
    - MySQL: `SHOW TABLES`, `SHOW COLUMNS`

---

## 18. Stored Procedures and Functions

1. Creating stored procedures (`CREATE PROCEDURE`)
2. Creating user-defined functions (`CREATE FUNCTION`)
3. Input/output parameters
4. Control flow: `IF`, `CASE`, `LOOP`, `WHILE`
5. Error handling (`TRY...CATCH`, `EXCEPTION` blocks)

---

## 19. Triggers

1. `BEFORE` and `AFTER` triggers
2. Row-level vs. statement-level triggers
3. Use cases: auditing, validation, automation

---

## 20. Temporary and Global Temporary Tables

1. `CREATE TEMPORARY TABLE`
2. Scope and lifecycle
3. Use in complex ETL or reporting workflows

---

## 21. User-Defined Types and Domains

1. Creating custom data types
2. Domains for reusable constraints
3. ENUMs and composite types (especially in PostgreSQL)

---

## 22. Partitioning and Sharding

1. Horizontal vs. vertical partitioning
2. Table partitioning strategies
3. Sharding for distributed databases

---

## 23. Materialized Views

1. Difference from regular views
2. Refresh strategies (manual, automatic)
3. Use cases for performance optimization

---

## 24. JSON and Semi-Structured Data in SQL

1. JSON data types (e.g., `JSON`, `JSONB`)
2. Functions: `JSON_EXTRACT()`, `JSON_VALUE()`, `->`, `->>`, etc.
3. Storing and querying nested data

---

## 25. XML and Hierarchical Data

1. XML data types
2. XPath/XQuery basics
3. Recursive CTEs for tree structures

---

## 26. Advanced Security

1. Row-level security (RLS)
2. Column-level encryption
3. Auditing and logging access

---

## 27. SQL in DevOps and Automation

1. Running SQL in CI/CD pipelines
2. Database versioning tools (e.g., Flyway, Liquibase)
3. Scripting with SQL in Python, Bash, or PowerShell
