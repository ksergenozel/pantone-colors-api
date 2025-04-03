import { Router } from "express";
import { getColors } from "./controller.js";

const router = Router();

router.get("/", getColors);

export default router;
