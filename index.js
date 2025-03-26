const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/receive", (req, res) => {
  const { echostr } = req.query;
  res.send(echostr || "hello");
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
