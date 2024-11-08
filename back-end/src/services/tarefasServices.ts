import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = (data: Object) => {
    return prisma.tarefas.create({data});
}