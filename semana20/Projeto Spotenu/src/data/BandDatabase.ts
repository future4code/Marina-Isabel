import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
    protected static TABLE_NAME = "SpotBand";

    private toModel(dbModel?: any): Band | undefined {
        return (
          dbModel &&
          new Band(
            dbModel.id,
            dbModel.name,
            dbModel.nickname,
            dbModel.description,
            dbModel.email,
            dbModel.password,
          )
        );
    } 
    
    public async createBand(user: Band): Promise<void> {
        const bandData = this.toModel(Band)
        await this.connection()
            .insert({
                id: bandData?.getId(),
                name: bandData?.getName(),
                nickname: bandData?.getNickname(),
                description: bandData?.getdescription(),
                email:bandData?.getEmail(),
                password: bandData?.getPassword(),
            })
            .into(BandDatabase.TABLE_NAME)
    }
}