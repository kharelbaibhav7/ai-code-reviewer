import { Router } from "express";
import { getAiResponse } from "../controller/ai.controller.js";

const aiRouter = Router();

aiRouter.post("/command", getAiResponse);

export default aiRouter;
