# Node.js HTTP Core Modules Comparison

## Overview

Node.js provides built-in modules for handling web communication using the HTTP protocol:

- `http` → Implements **HTTP/1.1**.
- `http2` → Implements **HTTP/2**.
- `https` → Implements **HTTP/1.1** over **TLS/SSL** for secure communication.

---

## Purpose of Each Module

### 1. `http`

- **Purpose:** Create HTTP servers and clients using the HTTP/1.1 protocol.
- **Key Points:**
  - Default for most Node.js web servers.
  - Supports request/response handling, routing logic, and headers.
  - Can be combined with TLS using `https`.

### 2. `http2`

- **Purpose:** Create servers and clients using the HTTP/2 protocol (faster, more efficient than HTTP/1.1).
- **Key Points:**
  - Supports multiplexing: multiple requests over a single TCP connection.
  - Binary framing instead of text-based, reducing overhead.
  - Supports server push (sending resources proactively).
  - Requires TLS in most browsers (except for some local development).

### 3. `https`

- **Purpose:** Create **secure** HTTP/1.1 servers and clients over TLS/SSL.
- **Key Points:**
  - Same API as `http` but encrypted.
  - Protects data in transit from eavesdropping and tampering.
  - Requires valid SSL/TLS certificates.

---

## HTTP/1.1 vs HTTP/2 – Key Technical Differences

| Feature           | HTTP/1.1                                                   | HTTP/2                                             |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| **Protocol Type** | Text-based                                                 | Binary-based                                       |
| **Connections**   | One request per TCP connection (or pipelining with limits) | Multiplexed streams over a single TCP connection   |
| **Headers**       | Sent in plain text                                         | Compressed with HPACK                              |
| **Performance**   | Higher latency due to multiple round trips                 | Lower latency with multiplexing and prioritization |
| **Server Push**   | Not supported                                              | Supported                                          |

---

## When to Use Each Module

| Module    | Best Use Case                                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| **http**  | Simple APIs, internal services, or when HTTP/2 is unnecessary.                                                   |
| **http2** | High-performance applications (SPAs, APIs, content-heavy sites) where latency reduction and multiplexing matter. |
| **https** | Any public-facing application requiring encryption and security (login forms, payment gateways, APIs).           |

---

## Example Usage

### HTTP/1.1

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello HTTP/1.1");
  })
  .listen(3000);
```

### HTTP/2

```js
const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
});

server.on("stream", (stream, headers) => {
  stream.respond({ "content-type": "text/plain", ":status": 200 });
  stream.end("Hello HTTP/2");
});

server.listen(3000);
```

### HTTPS

```js
const https = require("https");
const fs = require("fs");

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.crt"),
    },
    (req, res) => {
      res.writeHead(200);
      res.end("Hello Secure World");
    }
  )
  .listen(3000);
```
