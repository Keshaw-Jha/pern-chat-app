import { Router } from "express";

const router = Router();

router.get("/conversations", (req, res) => {
  res.send("Conversation route");
});

export default router;
