import { Router } from "express";
import { logIn, logOut, signUp, getMe } from "../controllers/authController.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = Router();

router.get("/me", protectedRoute, getMe);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

export default router;
