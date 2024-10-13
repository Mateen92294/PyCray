import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.end(`server is listening on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
