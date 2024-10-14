import { PrismaClient } from '@prisma/client';
import dayjs from "dayjs";

const prisma = new PrismaClient();

export const createClientService = async (product: object) => {
    return prisma.cliente.create({data: product});
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