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

export const getAllClient = async () => {
    return prisma.cliente.findMany();
}

export const getClietsName = async (nome: string) => {
    return prisma.cliente.findMany({where: {nome}});
}