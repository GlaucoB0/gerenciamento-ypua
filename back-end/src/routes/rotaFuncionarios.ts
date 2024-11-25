import { Router } from "express";
import { criarFuncionario, login, listToken } from "../controllers/controllerFuncionarios";
import verifyAdmin from '../helpers/verifyAdmin'

const router = Router();

router.post('/criarFuncionarios' ,criarFuncionario);
router.post('/login', login)
router.get('/listByToken', listToken);

export default router;