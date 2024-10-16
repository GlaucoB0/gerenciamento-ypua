import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const checkEmployeByCPF = async (cpf: string) => {
    return prisma.funcionario.findFirst({where: {cpf: cpf}});
}

export const createEmployeService = async (employe: object) => {
    return prisma.funcionario.create({data: employe});
}