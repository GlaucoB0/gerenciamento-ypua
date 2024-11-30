import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = (data: Object) => {
    return prisma.tarefas.create({data});
}

export const listTasks = () => {
    return prisma.tarefas.findMany();
}

export const deleteTask = async (id: number) => {
    return prisma.tarefas.delete({where: {tarefa_id: id}});
}