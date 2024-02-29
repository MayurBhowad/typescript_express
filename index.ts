import express from "express";
import { router } from "./routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/", router);

console.log("PORT: ", PORT);
// app.get("/", (req, res) => {
//   res.send("Hello from express and typescript");
// });

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
