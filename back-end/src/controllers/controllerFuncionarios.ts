import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { createEmployeSchema, loginSchema } from "../helpers/zodValidations";
import {Funcionario} from '../interfaces/interfaces';
import createUserToken from '../helpers/createToken';
import {checkEmployeByCPF, createEmployeService} from '../services/employeServices'
import formatZodError from '../helpers/formatZodError';
import getUserByToken from "../helpers/getUserByToken";

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

export const login = async (req: Request, res: Response) => {
    try {
        const bodyValidation = loginSchema.safeParse(req.body);

        if(!bodyValidation.success){
            return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)});
        }
        
        const employeData = bodyValidation.data;
        const user = await checkEmployeByCPF(employeData.cpf);
        if(!user){
            return res.status(404).json({message: "Não foi encontrado nenhum funcionario com este cpf"});
        }
        
        const compararSenha = await bcrypt.compare(employeData.senha, user.senha);
        if(!compararSenha){
            return res.status(403).json({message: "A senha não condiz!"})
        }
        
        await createUserToken(user, req, res);
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}

export const listToken = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {    
        const user = await getUserByToken(token, res)
        res.status(200).json(user);
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
}