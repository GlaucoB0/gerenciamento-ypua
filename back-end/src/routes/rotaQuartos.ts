import { Router } from "express";
import { criarQuartos, listarQuartos } from "../controllers/controllerQuartos";
import verifyAdmin from '../helpers/verifyAdmin'

const router = Router();

router.post('/criarQuartos', verifyAdmin ,criarQuartos);
router.get('/listarQuartos', listarQuartos);

export default router;