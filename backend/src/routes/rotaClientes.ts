import { Router } from "express";
import { clientById, criarCliente, deleteClient, listarClientes, listarClientesPorNome } from "../controllers/controllerClientes";
import verifyAdmin from "../helpers/verifyAdmin";

const router = Router();

router.post('/criarClientes', criarCliente);
router.get('/listarClientes', listarClientes);
router.get('/porNome/:nome', listarClientesPorNome);
router.get('/porId/:id', clientById);
router.delete('/deleteById/:id', deleteClient)

export default router;