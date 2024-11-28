import { Router } from "express";
import { criarQuartos, deleteRoom, listarQuartos, listOneRoom } from "../controllers/controllerQuartos";
import verifyAdmin from '../helpers/verifyAdmin'

const router = Router();

router.post('/criarQuartos', verifyAdmin ,criarQuartos);
router.get('/listarQuartos/:query', listarQuartos);
router.get('/listarQuarto/:id', listOneRoom)
router.delete('/deletarQuarto/:id', verifyAdmin, deleteRoom)

export default router;