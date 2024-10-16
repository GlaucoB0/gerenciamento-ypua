import { Router } from "express";
import { criarFuncionario } from "../controllers/controllerFuncionarios";

const router = Router();

router.post('/criarClientes', criarFuncionario);

export default router;