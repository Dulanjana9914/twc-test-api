import userCtrl from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.post("/refresh_token", userCtrl.getAccessToken);

export default router;
