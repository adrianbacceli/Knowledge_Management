---
title: Serialization & Deserialization
draft: true
tags:
  - serialization
  - deserialization
  - data-handling
  - programming
  - Security
NeedsReview: true
---
> [!info] What are Serialization and Deserialization?
> **Serialization** is the process of converting an object or data structure into a format that can be stored or transmitted (e.g., JSON, [[YAML]], XML, or binary).
> 
> **Deserialization** is the reverse—converting that serialized data back into a usable object or structure in memory.

## Why Use Them?

- **Persistence**: Save program state to disk or database
- **Communication**: Transmit structured data across systems (e.g., via HTTP, messaging queues)
- **Caching**: Store objects temporarily in serialized form
- **Configuration**: Load settings from files like JSON or [[YAML]]

## Common Formats

- **Human-readable**: JSON, [[YAML]], XML, TOML
- **Binary**: Protobuf, MessagePack, Pickle (Python), Java Serialized Objects

### Example

JSON Serialized:
```json
{
  "name": "Tux",
  "species": "Penguin",
  "age": 21
}
````

Deserialized (Python):

```python
{"name": "Tux", "species": "Penguin", "age": 21}
```

## Language-Specific Terms

|Language|Serialize|Deserialize|
|---|---|---|
|Python|`json.dump()`|`json.load()`|
|Java|`ObjectOutputStream`|`ObjectInputStream`|
|Go|`json.Marshal`|`json.Unmarshal`|
|C#|`JsonSerializer.Serialize`|`Deserialize`|

## Security Warning

> [!warning] Security Alert!  
> Deserialization of untrusted data can lead to **remote code execution (RCE)** and other vulnerabilities. This is especially true for formats that preserve object state and behavior (e.g., Python `pickle`, Java serialization).

**Best Practices:**

- Never deserialize untrusted input
    
- Use safe formats like JSON for public APIs
    
- Employ schema validation and secure libraries
    
- Prefer simple data structures over complex objects
    

## Summary

> [!tip] TL;DR
> 
> - **Serialization**: Turn object → data
>     
> - **Deserialization**: Turn data → object  
>     Essential for modern software systems, but must be handled securely and responsibly.
>     

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
