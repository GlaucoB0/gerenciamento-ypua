import getToken from "./getToken"
import getUserByToken from "./getUserByToken";
import { NextFunction, Request, Response } from 'express';
import {findById} from '../services/employeServices'

const verifyAdmin = async (req:Request, res:Response, next:NextFunction) => {
    try {
    const token = getToken(req);
    const user:any = await getUserByToken(token);
    const user_id = user.user_id 
    const papelCheck:any = await findById(user_id);
    
    if(papelCheck.funcao !== 'admin'){
        return res.status(403).json({message: "Você precisa ser um administrador para realizar esta função"})
    }
next()
    } catch (error) {
        res.status(500).json({message: "Erro ao validar papel"})
        console.log(error);
    }
    
}

export default verifyAdmin;