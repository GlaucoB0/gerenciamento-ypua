import { ParsedQs } from "qs"
import { PrismaClient } from '@prisma/client';

type RoomStatus = string | ParsedQs | string[] | ParsedQs[] | undefined

const prisma = new PrismaClient();

export const createRoomService = async (quarto: object) => {
    return prisma.quarto.create({ data: quarto });
}

export const listRooms = async (status: RoomStatus) => {
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

export const listRoom = async (id:string) => {
    let quarto = await prisma.quarto.findFirst({where: {quarto_id: id}, select: {
        nome: true,
        cama_casais: true,
        camas_solteiros: true,
        amenidades: true,
        image: true,
        preco: true
    }})

    quarto.acomoda = (quarto.cama_casais*2 + quarto.camas_solteiros)
    return quarto
}