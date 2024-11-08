import { Router } from "express";
import { criarTarefa, listarTarefa } from "../controllers/controllerTarefas";

const router = Router();

router.post('/criarTarefa', criarTarefa);
router.get('/listarTarefas', listarTarefa)

export default router;