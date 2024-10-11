import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createClientService = async (product: object) => {
    return prisma.cliente.create({data: product});
}