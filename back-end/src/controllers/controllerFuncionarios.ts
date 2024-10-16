import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { createEmployeSchema } from "../helpers/zodValidations";
import {Funcionario} from '../interfaces/interfaces';
import {checkEmployeByCPF, createEmployeService} from '../services/employeServices'
import formatZodError from '../helpers/formatZodError';

export const criarFuncionario = async (req: Request, res: Response) => {
    try {
        const bodyValidation = createEmployeSchema.safeParse(req.body);

        if(!bodyValidation.success){
            return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)});
        }
        
        let funcionario:Funcionario = bodyValidation.data;
        const salt = await bcrypt.genSalt(12);
        const senhaHash = await bcrypt.hash(funcionario.senha, salt);
        funcionario.senha = senhaHash;

        const find = await checkEmployeByCPF(funcionario.cpf);
        if(find){
            return res.status(401).json({message: "Não foi possivel criar o Funcionario, pois este já existe!"});
        }
        const funcionarioCriado = await createEmployeService(funcionario);
        if(!funcionarioCriado){
            return res.status(400).json({message: "Não foi possivel criar o Cliente!"});
        }
        res.status(201).end();
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}