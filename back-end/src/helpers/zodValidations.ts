import z from 'zod';

const onlyLetter = /\p{L}/

export const createClientSchema = z.object({
    nome: z.string({message: "O Nome deve ser uma string!"}).min(3, {message: "O Nome deve conter ao menos 3 caracteres!"}).max(255, {message: "O Nome não deve ultrapassar 255 caracteres"}).regex(onlyLetter),
    email: z.string({message: "O Email deve ser uma string!"}).email({message: "O Email deve ser no formato de email: nome@email.com"}).max(255, {message: "O Email deve conter no máximo 255 caracteres"}),
    cep: z.string()
})