import { Router } from "express";
import { criarCliente, listarClientes, listarClientesPorNome } from "../controllers/controllerClientes";
import verifyAdmin from "../helpers/verifyAdmin";

const router = Router();

router.post('/criarClientes', criarCliente);
router.get('/listarClientes', listarClientes);
router.get('/porNome/:nome', listarClientesPorNome)

export default router;