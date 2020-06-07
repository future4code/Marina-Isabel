import { IdGenerator } from '../services/IdGenerator'
import { HashManager } from '../services/HashManager'
import { BandDatabase } from '../data/BandDatabase'
import { Band } from '../model/Band'

export class BandBusiness {
    
    public async bandSignup(name: string, nickname: string, description:string, email: string, password: string, isApproved:boolean, role:string){
        const idGenerator = new IdGenerator()
        const id = idGenerator.generatorId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const band = new Band(id, name, nickname, description, email, hashPassword, isApproved, role)

        const bandDatabase = new BandDatabase()
        await bandDatabase.createBand(band)

        return { id: id}
    }

    public async getApprovedBands(id: string) {
       const band: Band = await new BandDatabase().getApprovedBands(id)
       return band;
    }
}