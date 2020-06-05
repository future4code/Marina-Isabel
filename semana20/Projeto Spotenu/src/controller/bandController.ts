import { Request, Response } from "express";
import { BandBusiness } from '../business/BandBusiness'
import { Authenticator } from '../services/Authenticator'


export class BandController {

    async signup(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            const bandBusiness = new BandBusiness()
            const {
                name,
                nickname,
                email,
                description,
                password,
            } = req.body

            if (
                !email || email === "" ||
                !name || name === "" ||
                !nickname || nickname === "" ||
                !password || password === ""
            ) {
                throw new Error("Parâmetros Inválidos")
            }

            if (password.length < 6) {
                throw new Error("A senha deverá ter no mínimo 6 caracteres")
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Email inválido")
            }

            const result = await bandBusiness.bandSignup(name, nickname, description, email, password)

            const authenticator = new Authenticator()
            const bandData = authenticator.verify(token)

            // if(bandData )

            res.status(200).send({
                message: "Aguarde para ser aprovado"
            })

        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    }
}