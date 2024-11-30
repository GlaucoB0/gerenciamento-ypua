import getToken from "./getToken.js"
import getUserByToken from "./getUserByToken.js";
import { findById } from '../services/employeServices'

const verifyRole = async (req, res, next) => {
    try {
        const token = getToken(req);
        const user:any = await getUserByToken(token);
        const user_id = user.funcionario_id
        const papelCheck:any = await findById(user_id);

        if (papelCheck.funcao !== 'admin') {
            return res.status(403).json({ message: "Você precisa ser um administrador ou um autor para realizar esta função" })
        }
        next()
    } catch (error) {
        res.status(500).json({ message: "Erro ao validar papel" })
    }

}

export default verifyRole;