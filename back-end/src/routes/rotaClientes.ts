import { Router } from "express";
import { criarCliente } from "../controllers/controllerClientes";

const router = Router();

router.post('/', criarCliente)

export default router;