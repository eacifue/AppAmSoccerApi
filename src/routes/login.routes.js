import { Router } from "express";
import { Login } from "../controllers/login.controller.js"



const router = Router();


router.post('/login', Login)

export default router