import z from 'zod';

const cepRegex = /\d{5}-\d{3}/
const stateRegex = /[A-ZA-Z]/
const regexTel = /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const regexIdQuarto = /[A-Z]{1}/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const createClientSchema = z.object({
    nome: z.string({message: "O Nome deve ser uma string!"}).min(3, {message: "O Nome deve conter ao menos 3 caracteres!"}).max(255, {message: "O Nome não deve ultrapassar 255 caracteres"}),
    email: z.string({message: "O Email deve ser uma string!"}).email({message: "O Email deve ser no formato de email: nome@email.com"}).max(255, {message: "O Email deve conter no máximo 255 caracteres"}),
    cep: z.string({message: "O Cep deve ser uma string!"}).regex(cepRegex, {message: "O CEP deve seguir este modelo: XXXXX-XXX onde X é um númerico"}),
    numero: z.number(),
    data_nascimento: z.string().datetime(),
    endereco: z.string({message: "O Endereço deve ser uma string"}).max(300, {message: "O endereço deve conter no máximo 300 caracteres"}).min(10, {message: "O Endereço deve conter no mínimo 10 caracteres"}),
    bairro: z.string({message: "O Bairro deve ser uma string"}).max(50, {message: "O Bairro deve conter no máximo 50 caracteres"}).min(2, {message: "O Bairro deve conter no mínimo 2 caracteres"}),
    cidade: z.string({message: "A Cidade deve ser uma string"}).max(100, {message: "A Cidade deve conter no máximo 100 caracteres"}).min(3, {message: "A Cidade deve conter no mínimo 3 caracteres"}),
    estado: z.string({message: "O Estado deve ser uma string"}).max(2, {message: "Deve conter no máximo 2 caracteres"}).regex(stateRegex, {message: "Deve seguir o modelo: XX onde X é uma letra"}),
    pais: z.string({message: "O Pais deve ser uma string"}).max(2, {message: "Deve conter no máximo 2 caracteres"}).regex(stateRegex, {message: "Deve seguir o modelo: XX onde X é uma letra"}),
    telefone: z.string({message: "O telefone deve ser uma string"}).regex(regexTel, {message: "O Número deve seguir este modelo: (XX) 9XXXX-XXXX onde X é um número e deve ser um DDD válido"}),
    cpf: z.string({message: "O CPF deve ser uma string"}).regex(regexCPF, {message: "Deve seguir este modelo: XXX.XXX.XXX-XX onde X é um número!"}),
    quarto_id: z.string().uuid({message: "Deve ser um UUID!"}),
    funcionario_id: z.string().uuid({message: "Deve ser um UUID!"}),
    data_reserva: z.string({message: "Deve ser uma data no modelo: YYYY-MM-DDTHH:MM:SSZ"}).datetime(),
    check_in: z.string({message: "Deve ser uma data no modelo: YYYY-MM-DDTHH:MM:SSZ"}).datetime(),
    check_out: z.string({message: "Deve ser uma data no modelo: YYYY-MM-DDTHH:MM:SSZ"}).datetime()
})

export const createRoomSchema = z.object({
    nome: z.string({message: "O Nome deve ser uma string!"}).min(3, {message: "O Nome deve conter ao menos 3 caracteres!"}).max(50, {message: "O Nome não deve ultrapassar 50 caracteres"}),
    descricao: z.string({message: "A Descrição deve ser uma string!"}).min(3, {message: "A Descrição deve conter ao menos 3 caracteres!"}).max(100, {message: "A Descrição não deve ultrapassar 100 caracteres"}),
    camas_solteiros: z.number({message: "Deve ser um número"}),
    cama_casais: z.number({message: "Deve ser um número"}),
    qtda_banheiros: z.number({message: "Deve ser um número"}),
    preco: z.number({message: "Deve ser um número"}),
    disponivel: z.boolean(),
    image: z.optional(z.string({message: "Deve ser uma string com o caminho da imagem"})),
    amenidades: z.object({
        arCondicionado: z.boolean(),
        wifi: z.boolean(),
        tv: z.boolean(),
        geladeira: z.boolean(),
        ducha: z.boolean(),
        banheira: z.boolean(),
        cozinha: z.boolean(),
        toalhas: z.boolean()
    })
})

export const createTaskSchema = z.object({
    nome: z.string({message: "O Nome deve ser uma string!"}).min(3, {message: "O Nome deve conter ao menos 3 caracteres!"}).max(255, {message: "O Nome não deve ultrapassar 255 caracteres"})
})

export const createEmployeSchema = z.object({
    nome: z.string({message: "O Nome deve ser uma string!"}).min(3, {message: "O Nome deve conter ao menos 3 caracteres!"}).max(255, {message: "O Nome não deve ultrapassar 255 caracteres"}),
    cpf: z.string({message: "O CPF deve ser uma string"}).regex(regexCPF, {message: "Deve seguir este modelo: XXX.XXX.XXX-XX onde X é um número!"}),
    funcao: z.enum(["admin", "funcionario"]),
    senha: z.string().max(100, {message: "A senha deve conter no máximo 100 caracteres"}).min(8, {message: "A senha conter pelo menos 8 caracteres"}).regex(passwordRegex, {message: "A senha deve conter ao menos 1 letra maiuscula, 1 letra minuscula, 1 número e 1 Caracter Especial"})
})

export const loginSchema = z.object({
    cpf: z.string(),
    senha: z.string()
})