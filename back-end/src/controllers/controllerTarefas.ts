import { Request, Response } from "express";
import { createTaskSchema } from "../helpers/zodValidations";
import formatZodError from '../helpers/formatZodError';
import { Tarefa } from "../interfaces/interfaces";
import { createTask, listTasks, deleteTask } from "../services/tarefasServices";

export const criarTarefa = async (req: Request, res: Response) => {
    try {
        const bodyValidation = createTaskSchema.safeParse(req.body);

        if (!bodyValidation.success) {
            return res.status(400).json({ 
                message: "Os dados recebidos no corpo da aplicação são invalidos", 
                detalhes: formatZodError(bodyValidation.error) 
            });
        }

        const tarefa:Tarefa = bodyValidation.data;
        await createTask(tarefa);
        res.status(201).json({message: "Tarefa criada!"})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}

export const listarTarefas =async (req: Request, res: Response) => {
    try {
        const tarefas = await listTasks();
        res.status(200).json(tarefas)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}

export const deletarTarefa = async (req: Request, res: Response) => {
    try {
        const id:number = Number(req.params.id);
        await deleteTask(id);
        res.status(204).end()
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}