import { Router } from "express";
import { criarQuartos, listarQuartos, listOneRoom } from "../controllers/controllerQuartos";
import verifyAdmin from '../helpers/verifyAdmin'

const router = Router();

router.post('/criarQuartos', verifyAdmin ,criarQuartos);
router.get('/listarQuartos/:query', listarQuartos);
router.get('/listarQuarto/:id', listOneRoom)

export default router;