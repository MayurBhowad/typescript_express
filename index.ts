import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from express and typescript");
});

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
