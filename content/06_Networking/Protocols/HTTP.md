---
title: HTTP
draft: false
tags:
  - Hack-The-Box
  - HTB
  - HTTP
  - Protocols
  - Foundations
  - Networking
  - port-80
  - port-443
NeedsReview: true
---

> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)

## Web Requests

### URL

Resources are accessed via a `URL`, which offers many more specifications than simply specifying a website we want to visit: ![Diagram of a URL structure: scheme 'http', user 'admin:password', host 'inlanefreight.com', port '80', path '/dashboard.php', query string 'login=true', fragment 'status'.](https://academy.hackthebox.com/storage/modules/35/url_structure.png)

| **Component**              | **Example**                                          | **Description**                                                                                                                                                                       |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Scheme`                   | `http://` `https://` `ftp://` `scp://`               | Protocol                                                                                                                                                                              |
| `User / Login Information` | `admin:password@`                                    | Provides login for authenticated content, (`@`)                                                                                                                                       |
| `Host`                     | `inlanefreight.com`                                  | Hostname or an IP address to connect to.                                                                                                                                              |
| `Port`                     | `:80`                                                | Logical session gate that will be accessed                                                                                                                                            |
| `Path`                     | `/dashboard.php` `/home/admin` `C$:\\Program_Files\` | Points to the resource being accessed, which can be a file or a folder. If there is no path specified, the server returns the default index (e.g. `index.html`).                      |
| `Query String`             | `?login=true`                                        | The query string starts with a question mark (`?`), and consists of a parameter (e.g. `login`) and a value (e.g. `true`). Multiple parameters can be separated by an ampersand (`&`). |
| `Fragments`                | `#status`                                            | Part of the URL processed by browsers on the client-side to locate sections (e.g. a header or section on the page).                                                                   |

---

## HTTP Flow

![Diagram showing a user accessing inlanefreight.com. The browser sends a DNS query to find the IP address, receives 152.153.81.14, and makes an HTTP request to the web server, which responds with 'HTTP/1.1 200 OK'.](https://academy.hackthebox.com/storage/modules/35/HTTP_Flow.png)

The diagram above presents the anatomy of an HTTP request at a very high level. The first time a user enters the URL (`inlanefreight.com`) into the browser, it sends a request to a DNS (Domain Name System) server to resolve the domain and get its IP. The DNS server looks up the IP address for `inlanefreight.com` and returns it. All domain names need to be resolved this way, as a server can't communicate without an IP address.

> [!NOTE]
> **Note:** Our browsers usually first look up records in the local '`/etc/hosts`' file, and if the requested domain does not exist within it, then they would contact other DNS servers. We can use the '`/etc/hosts`' to manually add records to for DNS resolution, by adding the IP followed by the domain name.
> 
> For more information, check [[2. Name resolution#Host file|Host File]]

Once the browser gets the IP address linked to the requested domain, it sends a GET request to the default HTTP port (e.g. `80`), asking for the root `/` path. Then, the web server receives the request and processes it. By default, servers are configured to return an index file when a request for `/` is received.

In this case, the contents of `index.html` are read and returned by the web server as an HTTP response. The response also contains the status code (e.g. `200 OK`), which indicates that the request was successfully processed. The web browser then renders the `index.html` contents and presents it to the user.

---

HTTP headers are key-value pairs sent in HTTP requests and responses that carry **meta-information** about the request, response, or client/server behavior.

---

### HTTP Headers:

**Headers tell the server or client _how_ to handle the request or response.**

### 🧭 What Headers Are Used For:

#### 🔹 1. **Describe the Client or Server**
- `User-Agent`: Identifies the software making the request (e.g., browser, bot).
- `Server`: Indicates the software used by the server (e.g., Apache, nginx).

#### 🔹 2. **Control Content Negotiation**
- `Accept`: Tells the server what content type (JSON, HTML, etc.) the client prefers.
- `Content-Type`: Tells the server what format the body of the request is in (e.g., JSON, form data).

#### 🔹 3. **Manage Authentication and Security**
- `Authorization`: Sends credentials (e.g., Bearer token or Basic auth).
- `Cookie`: Sends session or authentication cookies.
- `WWW-Authenticate`: Instructs client how to authenticate (sent by server).

#### 🔹 4. **Control Caching**
- `Cache-Control`, `ETag`, `Last-Modified`: Used to manage how content is cached and revalidated.

#### 🔹 5. **Specify Request/Response Context**
- `Host`: Specifies the domain name of the server (used in virtual hosting).
- `Referer`: Shows the URL that linked to the resource.
- `Origin`: Indicates the origin of the request, important for CORS.
- `X-Forwarded-For`: Carries the client’s original IP address through proxies.

#### 🔹 6. **Enable Cross-Origin Resource Sharing (CORS)**
- `Access-Control-Allow-Origin`: Specifies who can access a resource cross-origin.
- `Access-Control-Allow-Headers`: Declares which headers are permitted in the request.

#### 🔹 7. **Control Behavior**
- `Content-Length`: Size of the request/response body in bytes.
- `Connection`: Whether to keep the TCP connection alive (`keep-alive`) or close it.

---

### 🧪 Summary Table

|Category|Common Headers|Purpose|
|---|---|---|
|Identity|`User-Agent`, `Server`, `Referer`|Who is talking and where they came from|
|Content|`Accept`, `Content-Type`, `Content-Length`|What format is being sent or requested|
|Auth/Security|`Authorization`, `Cookie`, `WWW-Authenticate`|Managing access and identity|
|Caching|`Cache-Control`, `ETag`, `Expires`|Optimize performance and freshness|
|Network|`Host`, `Connection`, `X-Forwarded-For`|Network routing and behavior|
|CORS|`Access-Control-*`|Managing cross-origin requests|

---
### 📌 Quicknote: Setting HTTP Headers with `curl`

#### 🔹 Set `User-Agent` Header

You can use either of the following methods to set the `User-Agent`:

- **Using `-A` (shortcut):**
```bash
curl -A "Administrator" http://example.com
```

- **Using `-H` (manual header):**
```bash
curl -H "User-Agent: Administrator" http://example.com
```

✅ _Both are functionally equivalent._  
Use `-A` for simplicity, or `-H` if you're setting multiple headers.

---

#### 🔹 Common Headers You Can Set with `curl -H`

|Header|Purpose|Example|
|---|---|---|
|`User-Agent`|Identifies the client|`curl -H "User-Agent: MyClient"`|
|`Authorization`|Sends credentials (Bearer, Basic)|`curl -H "Authorization: Bearer TOKEN"`|
|`Content-Type`|Specifies data format in request|`curl -H "Content-Type: application/json"`|
|`Accept`|Specifies desired response format|`curl -H "Accept: application/json"`|
|`Host`|Overrides the DNS-resolved hostname|`curl -H "Host: test.example.com" http://IP`|
|`Referer`|Indicates the previous page|`curl -H "Referer: http://example.com"`|
|`Cookie`|Sends session/auth cookies|`curl -H "Cookie: sessionid=abc123"`|
|`X-Forwarded-For`|Simulates a client IP address (used in testing)|`curl -H "X-Forwarded-For: 1.2.3.4"`|


---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
