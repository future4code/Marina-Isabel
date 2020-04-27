import { User } from './UserAccount'
import { JSONFileManager } from './JSONFileManager'

export class Bank {
    private accounts: User[]
    private filemanager: JSONFileManager


    constructor(accounts: User[], filemanager: JSONFileManager) {
        this.accounts = accounts;
        this.filemanager = filemanager;
    }

    createAccount():void {
        console.log("Sua conta foi criada com sucesso!")
    }

    getAllAccounts(): User[]{
        return 
    }

    getAccountByCpf(): User[]{
        return 
    }

    saveAccounts(): void {
        console.log("A conta foi salva com sucesso!")
    }

}