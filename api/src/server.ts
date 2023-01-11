import express, { Request, Response, NextFunction } from 'express'
import {router} from'./routes'
import cors from 'cors'

import path from 'path'

const app = express()
app.use(express.json())

app.use(cors())

app.use(router)


// Para pegar o link da imagem (localhost:3333/files/products/nomedaimagem) 
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.listen(3333, () => {
    console.log("Rodando");
    
})