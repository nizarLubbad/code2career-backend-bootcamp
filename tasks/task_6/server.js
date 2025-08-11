const http = require("http");

const server = http.createServer((req, res) => {
  // Set the response header for JSON
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "Welcome to the server" }));
    } else if (req.url === "/about") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "This is the about route" }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Route not found" }));
    }
  } else {
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});
