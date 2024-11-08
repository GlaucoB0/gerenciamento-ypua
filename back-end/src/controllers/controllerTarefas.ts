import { Request, Response } from "express";
import { createTaskSchema } from "../helpers/zodValidations";
import formatZodError from '../helpers/formatZodError';
import { Tarefa } from "../interfaces/interfaces";
import { createTask } from "../services/tarefasServices";

export const criarTarefa = async (req: Request, res: Response) => {
    try {
        const bodyValidation = createTaskSchema.safeParse(req.body);

        if (!bodyValidation.success) {
            return res.status(400).json({ message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error) });
        }

        const tarefa:Tarefa = bodyValidation.data;
        await createTask(tarefa);
        res.status(201).json({message: "Tarefa criada!"})
    } catch (error) {
        
    }
}
