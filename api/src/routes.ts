import { Router, Request, Response } from 'express'
import multer from 'multer'

import { EnviaFotoController } from './controller/EnviaFotoController'

import uploadConfig from './config/multer'

const router = Router()

const upload_foto = multer(uploadConfig.upload('./tmp'))

router.post('/enviafoto', upload_foto.single('file'), new EnviaFotoController().handle)

export {router}