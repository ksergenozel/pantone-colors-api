import express from "express";
import { env } from "#config/env.js";
import router from "#routes.js";
import cors from "cors";
import { rateLimtier } from "#middlewares/rateLimiter.js";
import { simpleLogger } from "#middlewares/simpleLogger.js";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimtier);
app.use(simpleLogger);

app.use("/api", router);

const port = env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
