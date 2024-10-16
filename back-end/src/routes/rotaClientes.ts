import { Router } from "express";
import { criarCliente, listarClientes, listarClientesPorNome } from "../controllers/controllerClientes";
import verifyAdmin from "../helpers/verifyAdmin";

const router = Router();

router.post('/criarClientes', verifyAdmin, criarCliente);
router.get('/listarClientes', listarClientes);
router.get('/porNome/:nome', listarClientesPorNome)

export default router;