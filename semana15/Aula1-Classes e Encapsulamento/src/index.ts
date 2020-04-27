import { User } from './UserAccount'
import { Transaction } from './Transaction'
import {JSONFileManager} from "./JSONFileManager";

const newAccount: User = new User("Maria",  "01230392829", 17, 1, 2 );
console.log(newAccount)
newAccount.addBalance()
newAccount.setAge(17)



const fileManager: JSONFileManager = new JSONFileManager('playlist.json');

