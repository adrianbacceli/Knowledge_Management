---
title: Web Requests
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
## URL

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
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
