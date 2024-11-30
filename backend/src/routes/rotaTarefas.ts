import { Router } from "express";
import { criarTarefa, deletarTarefa, listarTarefas } from "../controllers/controllerTarefas";

const router = Router();

router.post('/criarTarefa', criarTarefa);
router.get('/listarTarefas', listarTarefas);
router.delete('/deletarTarefa/:id', deletarTarefa)

export default router;