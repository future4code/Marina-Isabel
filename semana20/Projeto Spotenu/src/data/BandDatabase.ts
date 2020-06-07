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
        dbModel.isApproved,
        dbModel.role
      )
    );
  }

  public async createBand(band: Band): Promise<void> {
    const bandData = this.toModel(band)
    await this.connection()
      .insert({
        id: bandData?.getId(),
        name: bandData?.getName(),
        nickname: bandData?.getNickname(),
        description: bandData?.getdescription(),
        email: bandData?.getEmail(),
        password: bandData?.getPassword(),
        isApproved: bandData?.getApproved(),
        role: bandData?.getRole()
      })
      .into(BandDatabase.TABLE_NAME)
  }

  public async getApprovedBands(): Promise<any> {
    const result = await this.connection().raw(`
      SELECT 
        b.id, 
        b.name, 
        b.nickname, 
        b.email, 
        b.isApproved 
      FROM SpotBand b 
      WHERE b.id`);

    const allBands = []
    for (const item of result[0]) {
      allBands.push({
        id: item.id,
        name: item.name,
        nickname: item.nickname,
        isApproved: item.isApproved
      })
    }
    // console.log(allBands)
    return this.toModel(allBands)
  }
}