import { Router } from "express";
import { criarQuartos, listarQuartos } from "../controllers/controllerQuartos";

const router = Router();

router.post('/criarQuartos', criarQuartos);
router.get('/listarQuartos', listarQuartos);

export default router;