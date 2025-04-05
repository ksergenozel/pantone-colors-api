import { Router } from "express";
import colorRoutes from "./modules/color/routes.js";

const router = Router();

router.use("/colors", colorRoutes);

export default router;
