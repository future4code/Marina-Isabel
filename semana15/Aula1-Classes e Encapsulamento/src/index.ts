import { User } from './UserAccount'
import { Transaction } from './Transaction'
import { Bank } from './Bank'
import {JSONFileManager} from "./JSONFileManager";

const createAccount: User = new User("Maria",  "01230392829", 18, 1, 2 );
console.log(createAccount)

// const getBalanceAccount: User = new User("0");
// getBalanceAccount.getBalance()

// const addBalanceAccount: User = new User()
// addBalanceAccount.addBalance()





const fileManager: JSONFileManager = new JSONFileManager('playlist.json');

