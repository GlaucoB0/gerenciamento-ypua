export interface Reservas {
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
    data_reserva: Date;
    check_in: Date;
    check_out: Date;
    quarto_id: String;
    funcionario_id: String;
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

export interface Funcionario{
    nome: string;
    funcao: string;
    cpf: string;
    senha: string;
}