export interface Reservas {
    nome: string;
    email: string;
    cep: string;
    data_nascimento: string;
    numero: number;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    telefone: string;
    cpf: string;
    data_reserva: Date | string;
    check_in: Date | string;
    check_out: Date | string;
    quarto_id: string;
    funcionario_id: string;
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

export interface Tarefa{
    nome: String;
}