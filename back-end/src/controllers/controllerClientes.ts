import { Request, Response } from "express";
import { createClientSchema } from "../helpers/zodValidations";
import {Clientes} from '../interfaces/interfaces';
import {createClientService} from '../services/clientesServices'
import formatZodError from '../helpers/formatZodError';

export const criarCliente = async (req: Request, res: Response) => {
    try {
        const bodyValidation = createClientSchema.safeParse(req.body);

        if(!bodyValidation.success){
            return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)});
        }

        const client:Clientes = bodyValidation.data;
        const clienteCriado = await createClientService(client);
        if(!clienteCriado){
            return res.status(400).json({message: "Não foi possivel criar o Cliente!"});
        }
        res.status(201).end();
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}   