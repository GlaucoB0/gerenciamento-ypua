import { Router } from "express";
import { criarFuncionario } from "../controllers/controllerFuncionarios";

const router = Router();

router.post('/criarFuncionarios', criarFuncionario);

export default router;