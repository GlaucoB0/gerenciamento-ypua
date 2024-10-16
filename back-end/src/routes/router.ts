import { Router } from "express";
import routerCliente from "./rotaClientes";
import routerQuartos from './rotaQuartos';

const router = Router();

router.use('/clientes', routerCliente);
router.use('/quartos', routerQuartos);

export default router;