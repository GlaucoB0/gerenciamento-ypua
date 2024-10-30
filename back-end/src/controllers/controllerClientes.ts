import { Request, Response } from "express";
import { createClientSchema } from "../helpers/zodValidations";
import {Reservas} from '../interfaces/interfaces';
import {createClientService, birthValidation, getAllClient, getClietsName} from '../services/clientesServices'
import formatZodError from '../helpers/formatZodError';

export const criarCliente = async (req: Request, res: Response) => {
    try {
        const bodyValidation = createClientSchema.safeParse(req.body);

        if(!bodyValidation.success){
            return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)});
        }

        birthValidation(bodyValidation.data.data_nascimento);
        
        const client:Reservas = bodyValidation.data;
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

export const listarClientes = async (req: Request, res: Response) => {
    try {
        const getAllClients = await getAllClient();
        if(getAllClients.length == 0){
            res.status(404).json({message: "Não foram encontrados clientes!"})
        }
        const clients = getAllClients.map(client => {
            const data = {
                identificador: client.cliente_id.split('-')[0],
                nome: client.nome,
                telefone: client.telefone
            }
            return data;
        })
        res.status(200).json(clients)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}

export const listarClientesPorNome = async (req: Request, res: Response) => {
    try {
        const nome = req.body.nome;
        const clientsByName = await getClietsName(nome);
        if(clientsByName.length == 0){
            res.status(404).json({message: "Não foram encontrados clientes!"})
        }
        res.status(200).json({data: getAllClient})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}