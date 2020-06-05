import { Request, Response } from "express";
import { UserBusiness } from '../business/UserBusiness'
import { Authenticator } from '../services/Authenticator'


export class UserController {

    async signup(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness()
            const {
                name,
                nickname,
                email,
                password,
                role,
            } = req.body

            if (
                !email || email === "" ||
                !name || name === "" ||
                !nickname || nickname === "" ||
                !password || password === ""
            ) {
                throw new Error("Parâmetros Inválidos")
            }

            if(password.length < 6){
                throw new Error("A senha deverá ter no mínimo 6 caracteres")
            }

            if(email.indexOf("@") === -1){
                throw new Error("Email inválido")
            }

            const result = await userBusiness.signup(name, nickname, email, password, role)

            const authenticator = new Authenticator()

            const acessToken = authenticator.generationToken(
                {
                    id: result.id,
                    role: result.role
                },
                process.env.ACCESS_TOKEN_EXPIRES_IN
            )

            res.status(200).send({
                acessToken
            })

        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    }
}