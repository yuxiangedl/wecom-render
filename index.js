const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/receive", (req, res) => {
  const { echostr } = req.query;
  res.send(echostr || "hello");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server running on http://0.0.0.0:${port}`);
});
