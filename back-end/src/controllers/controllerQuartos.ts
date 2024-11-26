import { Request, Response } from "express";
import { createRoomSchema } from "../helpers/zodValidations";
import { countAvaliableRooms, createRoomService, listRooms, listRoom } from "../services/quartosServices";
import { Quarto } from "../interfaces/interfaces"
import formatZodError from '../helpers/formatZodError';

export const criarQuartos =async (req: Request, res: Response) => {
    try {
        const bodyValidation = createRoomSchema.safeParse(req.body);
        if(!bodyValidation.success){
            return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)});
        }
        const quarto:Quarto = bodyValidation.data;
        const quartoCriado = await createRoomService(quarto);

        if(!quartoCriado){
            return res.status(400).json({message: "Não foi possivel criar o Quarto!"});
        }
        res.status(201).end();
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}

export const listarQuartos =async (req: Request, res: Response) => {
    const query = req.params.query;
    try {
        if(query == 'count'){
            let count = await countAvaliableRooms();
            return res.status(200).json(count);
        }
        if(query == 'list'){
            const status = req.query.status;
            const rooms = await listRooms(status);
            return res.status(200).json(rooms)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}

export const listOneRoom = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const room = await listRoom(id)
        res.status(200).json(room);
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}