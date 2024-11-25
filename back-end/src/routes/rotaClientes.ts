import { Router } from "express";
import { clientById, criarCliente, listarClientes, listarClientesPorNome } from "../controllers/controllerClientes";
import verifyAdmin from "../helpers/verifyAdmin";

const router = Router();

router.post('/criarClientes', criarCliente);
router.get('/listarClientes', listarClientes);
router.get('/porNome/:nome', listarClientesPorNome);
router.get('/porId/:id', clientById);

export default router;