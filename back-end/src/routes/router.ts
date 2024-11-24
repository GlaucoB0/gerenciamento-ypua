import { Router } from "express";
import routerCliente from "./rotaClientes";
import routerQuartos from './rotaQuartos';
import routerFuncionarios from './rotaFuncionarios';
import routerTarefas from './rotaTarefas';

const router = Router();

router.use('/clientes', routerCliente);
router.use('/quartos', routerQuartos);
router.use('/funcionarios', routerFuncionarios);
router.use('/tarefas', routerTarefas);

export default router;