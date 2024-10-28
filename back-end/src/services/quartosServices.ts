import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRoomService = async (quarto: object) => {
    return prisma.quarto.create({data: quarto});
}

export const listRooms = async () => {
    return prisma.quarto.findMany({select: {
        nome: true,
        descricao: true,
        amenidades: true,
        image: true
    }});
}