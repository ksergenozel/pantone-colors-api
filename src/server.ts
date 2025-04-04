import express from "express";
import { env } from "#config/env.js";
import router from "#routes.js";
import cors from "cors";

const app = express();
const port = env.PORT;

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
