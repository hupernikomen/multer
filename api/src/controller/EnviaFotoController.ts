import { Request, Response } from 'express'

import { EnviaFotoService } from '../services/EnviaFotoService'

class EnviaFotoController {
    async handle(req: Request, res: Response) {
        const enviaFotoService = new EnviaFotoService()

        if (!req.file) {
            throw new Error("Ops, algo deu errado");

        } else {
            const { filename: foto } = req.file

            const fotoenv = await enviaFotoService.execute({
                foto
            })

            return res.json(fotoenv)
        }
    }


}

export { EnviaFotoController }