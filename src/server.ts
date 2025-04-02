import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (_, res) => {
  res.status(200).json({
    message: "Hello, World!",
  });
});

app.listen(port, () => {
  console.log("INFO: Server is running on port:", port);
});
