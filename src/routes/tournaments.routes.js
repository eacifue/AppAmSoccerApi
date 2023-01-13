import { Router } from "express";

const router = Router();

router.get('/tournaments', (req, res) => {res.send('obteniendo tournaments')})

export default router