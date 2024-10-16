export interface Clientes {
    nome: String;
    email: String;
    cep: String;
    data_nascimento: String;
    numero: Number;
    endereco: String;
    bairro: String;
    cidade: String;
    estado: String;
    pais: String;
    telefone: String;
    cpf: String;
}

export interface Quarto {
    identificacao: string;
    nome: string;
    descricao: string;
    camas_solteiros: number;
    cama_casais: number;
    qtda_banheiros: number;
    preco: number;
    disponivel: boolean;
    image?: string | undefined;
}