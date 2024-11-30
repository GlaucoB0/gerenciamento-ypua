import jwt from 'jsonwebtoken'

const createUserToken = async (user, req, res) => {
    const senha = process.env.SENHAJWT;
    const token = jwt.sign(
        {
            nome: user.nome,
            id: user.funcionario_id
        },
        senha
    )

    res.status(200).json({
        message: `Usuario: ${user.nome} logado com sucesso!`,
        token,
        funcionarioId: user.funcionario_id
    })
}

export default createUserToken;