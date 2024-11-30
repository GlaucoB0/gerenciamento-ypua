import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import getToken from './getToken.js';

const verifyToken = (req:any, res:Response, next:NextFunction) => {
    const senha = process.env.SENHAJWT;
    if(!req.headers.authorization){
        res.status(401).json({err: "Acesso Negado"})
        return
    }

    const token = getToken(req);

    if(!token){
        res.status(401).json({err: "Acesso Negado"})
        return
    }

    try {
        const verified = jwt.verify(token, senha);
        req.usuario = verified;
        next();
    }catch(err){
        res.status(400).json({err: "Token passado não é valido"});
        console.error(err);
    }
}

export default verifyToken;