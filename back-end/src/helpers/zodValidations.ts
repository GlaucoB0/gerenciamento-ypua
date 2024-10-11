import z from 'zod';

const onlyLetter = /\p{L}/
const cepRegex = /\d{5}-\d{3}/
const stateRegex = /[A-ZA-Z]/
const regexTel = /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

export const createClientSchema = z.object({
    nome: z.string({message: "O Nome deve ser uma string!"}).min(3, {message: "O Nome deve conter ao menos 3 caracteres!"}).max(255, {message: "O Nome não deve ultrapassar 255 caracteres"}).regex(onlyLetter),
    email: z.string({message: "O Email deve ser uma string!"}).email({message: "O Email deve ser no formato de email: nome@email.com"}).max(255, {message: "O Email deve conter no máximo 255 caracteres"}),
    cep: z.string({message: "O Cep deve ser uma string!"}).regex(cepRegex, {message: "O CEP deve seguir este modelo: XXXXX-XXX onde X é um númerico"}),
    endereco: z.string({message: "O Endereço deve ser uma string"}).max(300, {message: "O endereço deve conter no máximo 300 caracteres"}).min(10, {message: "O Endereço deve conter no mínimo 10 caracteres"}),
    rua: z.string({message: "A Rua deve ser uma string"}).max(50, {message: "A rua deve conter no máximo 50 caracteres"}).min(2, {message: "A Rua deve conter no mínimo 2 caracteres"}),
    cidade: z.string({message: "A Cidade deve ser uma string"}).max(100, {message: "A Cidade deve conter no máximo 100 caracteres"}).min(3, {message: "A Cidade deve conter no mínimo 3 caracteres"}),
    estado: z.string({message: "O Estado deve ser uma string"}).max(2, {message: "Deve conter no máximo 2 caracteres"}).regex(stateRegex, {message: "Deve seguir o modelo: XX onde X é uma letra"}),
    pais: z.string({message: "O Pais deve ser uma string"}).max(2, {message: "Deve conter no máximo 2 caracteres"}).regex(stateRegex, {message: "Deve seguir o modelo: XX onde X é uma letra"}),
    telefone: z.string({message: "O telefone deve ser uma string"}).regex(regexTel, {message: "O Número deve seguir este modelo: (XX) 9XXXX-XXXX onde X é um número e deve ser um DDD válido"}),
    cpf: z.string({message: "O CPF deve ser uma string"}).regex(regexCPF, {message: "Deve seguir este modelo: XXX.XXX.XXX-XX onde X é um número!"})
})