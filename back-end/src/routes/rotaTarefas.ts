import { Router } from "express";
import { criarTarefa, listarTarefas } from "../controllers/controllerTarefas";

const router = Router();

router.post('/criarTarefa', criarTarefa);
router.get('/listarTarefas', listarTarefas)

export default router;