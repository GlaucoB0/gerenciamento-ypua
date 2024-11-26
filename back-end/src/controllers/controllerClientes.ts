import { Request, Response } from "express";
import { createClientSchema } from "../helpers/zodValidations";
import { Reservas } from '../interfaces/interfaces';
import { createClientService, birthValidation, getAllClient, validaQuarto, getByName, getClietsId } from '../services/clientesServices'
import formatZodError from '../helpers/formatZodError';

export const criarCliente = async (req: Request, res: Response) => {
    try {
        const bodyValidation = createClientSchema.safeParse(req.body);

        if (!bodyValidation.success) {
            return res.status(400).json({ message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error) });
        }

        const validarQuarto = await validaQuarto(bodyValidation.data.quarto_id)
        if (!validarQuarto) {
            res.status(403).json({ message: "O quarto não está disponivel" })
        }

        let reserva = bodyValidation.data;
        reserva.check_in = new Date(reserva.check_in);
        reserva.check_out = new Date(reserva.check_out);
        reserva.data_nascimento = new Date(reserva.data_nascimento);
        reserva.data_reserva = new Date(reserva.data_reserva);

        const client: Reservas = reserva;
        const clienteCriado = await createClientService(client);
        if (!clienteCriado) {
            return res.status(400).json({ message: "Não foi possivel criar o Cliente!" });
        }
        res.status(201).end();
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}

export const listarClientes = async (req: Request, res: Response) => {
    try {
        const clients = await getAllClient();
        // if (clients.length == 0) {
        //     res.status(404).json({ message: "Não foram encontrados clientes!" })
        // }

        res.status(200).json(clients)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}

export const listarClientesPorNome = async (req: Request, res: Response) => {
    try {
        const nome = req.body.nome;
        const allByName = await getByName(nome);
        if (allByName.length == 0) {
            res.status(404).json({ message: "Não foram encontrados clientes!" })
        }

        res.status(200).json(allByName)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}

export const clientById =async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const allByName = await getClietsId(id);
        if (allByName.length == 0) {
            res.status(404).json({ message: "Não foram encontrados clientes!" })
        }

        res.status(200).json(allByName)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}