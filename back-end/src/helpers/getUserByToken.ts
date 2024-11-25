import jwt from 'jsonwebtoken';
import {findById} from '../services/employeServices'

const getUserByToken = async (token: string) => {
    const senha = process.env.SENHAJWT
    return new Promise(async (resolve, reject) => {
        if(!token){
            return res.status(401),json({err: "Acesso Negado!"})
        }
        const decode = jwt.decode(token, senha);
        const user_id = decode.id;

        try {
            const user = await findById(user_id)
            if(!user){
                reject({status: 404, message: "Usuario não encontrado"});
            }
            resolve(user)
        } catch (error) {
            reject({status: 500, message: "erro ao buscar usuario"});
        }
    })
}

export default getUserByToken;