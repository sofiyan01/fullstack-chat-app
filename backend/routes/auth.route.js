import express from "express"
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.js";


const authRouter=express.Router();

authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.post("/logout",logout)

// User

authRouter.put("/update-profile", protectRoute, updateProfile);

authRouter.get("/check", protectRoute, checkAuth);


export default authRouter;