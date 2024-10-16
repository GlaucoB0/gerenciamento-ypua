import { Router } from "express";
import { criarFuncionario, login } from "../controllers/controllerFuncionarios";
import verifyAdmin from '../helpers/verifyAdmin'

const router = Router();

router.post('/criarFuncionarios', verifyAdmin ,criarFuncionario);
router.post('/login', login)

export default router;