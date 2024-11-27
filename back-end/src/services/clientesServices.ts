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
    const client = await prisma.reserva.findFirst({where: {reserva_id: id}, include: {
        quarto: true
    }});

    if (!client) {
        return null
    }

    const clientNew = {
        cliente: {
            nome: client.nome,
            cpf: client.cpf,
            telefone: client.telefone,
            data_nascimento: client.data_nascimento
        },
        reserva: {
            acomodacao: client.quarto.nome,
            reservado: client.data_reserva,
            check_in: client.check_in,
            check_out: client.check_out
        },
        endereco: {
            cep: client.cep,
            bairro: client.bairro,
            numero: client.numero,
            cidade: client.cidade,
            estado: client.estado,
            pais: client.pais,
            complemento: client.endereco
        }
    }
    return clientNew
}

export const deleteClientService = async (id:string) => {
    return prisma.reserva.delete({where: {reserva_id: id}});
}