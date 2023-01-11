import prismaClient from "../prisma";

interface FotoRequest{
    foto: string
}

class EnviaFotoService {
    async execute({
        foto
    }: FotoRequest) {
        try {
            const fotoenv = await prismaClient.foto.create({
                data: {
                    foto
                }
            })

            return fotoenv
        } catch (err) {
            
        }
    }
}

export {EnviaFotoService}