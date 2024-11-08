import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRoomService = async (quarto: object) => {
    return prisma.quarto.create({data: quarto});
}

export const listRooms = async (status: String) => {
    if(status){
        if(status == 'disponivel'){
            return prisma.quarto.findMany({select: {
                quarto_id: true,
                nome: true,
                descricao: true,
                amenidades: true,
                image: true,
                disponivel: true
            }, where: {
                disponivel: true
            }});
        }else if(status == 'ocupado'){
            return prisma.quarto.findMany({select: {
                nome: true,
                descricao: true,
                amenidades: true,
                image: true,
                disponivel: true
            }, where: {
                disponivel: false
            }});
        }
    }
    return prisma.quarto.findMany({select: {
        nome: true,
        descricao: true,
        amenidades: true,
        image: true,
        disponivel: true
    }});
}

export const countAvaliableRooms = () => {
    return prisma.quarto.count({where: {disponivel: true}})
}