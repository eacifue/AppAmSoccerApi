import { Router } from "express";
import {getTeams, getTeam, createTeam} from '../controllers/teams.controllers.js'
const router = Router();

router.get('/teams', getTeams)
router.get('/teams/:id', getTeam)
router.post('/teams', createTeam)

export default router