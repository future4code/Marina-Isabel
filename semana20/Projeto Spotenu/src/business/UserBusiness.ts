import { IdGenerator } from '../services/IdGenerator'
import { HashManager } from '../services/HashManager'
import { UserDatabase } from '../data/UserDatabase'
import { User } from '../model/User'

export class UserBusiness {

    public async signup(name: string, nickname: string, email: string, password: string, role: string){
        const idGenerator = new IdGenerator()
        const id = idGenerator.generatorId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(id, name, nickname, email, hashPassword, role)

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        return { id: id, role: role }
    }
} 
