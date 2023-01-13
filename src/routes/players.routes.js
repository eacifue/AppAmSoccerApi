import { Router } from "express";

const router = Router();

router.get('/players', (req, res) => {res.send('obteniendo players')})

export default router