import { Router } from "express";
import routerCliente from "./rotaClientes";
import routerQuartos from './rotaQuartos';
import routerFuncionarios from './rotaFuncionarios';

const router = Router();

router.use('/clientes', routerCliente);
router.use('/quartos', routerQuartos);
router.use('/funcionarios', routerFuncionarios);

export default router;