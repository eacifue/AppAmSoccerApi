import { Router } from "express";
import {getTeams, createTeam, getTeamsByTournaments} from '../controllers/teams.controllers.js'
const router = Router();

router.get('/teams', getTeams)
//router.get('/teams/:id', getTeam)
router.post('/teams', createTeam)
router.get('/teams/:id', getTeamsByTournaments)

export default router