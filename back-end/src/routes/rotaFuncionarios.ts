import { Router } from "express";
import { criarFuncionario, login } from "../controllers/controllerFuncionarios";

const router = Router();

router.post('/criarFuncionarios', criarFuncionario);
router.post('/login', login)

export default router;