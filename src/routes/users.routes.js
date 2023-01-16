import { Router } from "express";
import { Login, createUser, getUsers} from "../controllers/users.controller.js"



const router = Router();


router.get('/users', getUsers)
router.post('/users', Login)
router.post('/users', createUser)

export default router