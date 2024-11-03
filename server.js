require("dotenv").config();
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home route");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
