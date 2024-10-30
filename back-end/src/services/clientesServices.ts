import { PrismaClient } from '@prisma/client';
import dayjs from "dayjs";

const prisma = new PrismaClient();

export const createClientService = async (reserva: object) => {
    return prisma.reserva.create({data: reserva});
}

export const birthValidation = async (date: string) => {
    let nascimento = dayjs(date);
    const now = dayjs();
    if(nascimento < now){
        return false
    }
    return true
}

export const validaQuarto =async (quarto_id:string) => {
    const quarto = await prisma.quarto.findFirst({where: {quarto_id: {equals: quarto_id}}, select: {disponivel: true}});
    if(quarto?.disponivel == true){
        return true
    }
    return false
}

export const getAllClient = async () => {
    return prisma.reserva.findMany({select: {
        reserva_id:true,
        quarto: {
            select: {
                nome: true
            }
        },
        nome: true,
        telefone: true,
        data_reserva: true,
        check_in: true,
        check_out: true
    }});
}

export const getByName =async (nome: string) => {
    return prisma.reserva.findMany({where: {nome}, select: {
        reserva_id:true,
        quarto: {
            select: {
                nome: true
            }
        },
        nome: true,
        telefone: true,
        data_reserva: true,
        check_in: true,
        check_out: true
    }});
}

export const getClietsId = async (id: string) => {
    const clients:any = await prisma.reserva.findFirst({where: {reserva_id: id}, include: {
        quarto: true
    }});

    const clientNew = {
        cliente: {
            nome: clients.nome,
            cpf: clients.cpf,
            telefone: clients.telefone,
            data_nascimento: clients.data_nascimento
        },
        reserva: {
            acomodacao: clients.quarto.nome,
            reservado: clients.data_reserva,
            check_in: clients.check_in,
            check_out: clients.check_out
        },
        endereco: {
            cep: clients.cep,
            bairro: clients.bairro,
            numero: clients.numero,
            cidade: clients.cidade,
            estado: clients.estado,
            pais: clients.pais,
            complemento: clients.endereco
        }
    }
    return clientNew
}