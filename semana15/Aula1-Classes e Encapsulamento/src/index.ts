import { User } from './UserAccount'

const newAccount: User = new User("Maria",  "01230392829", 17, 1, 2 );
console.log(newAccount)
newAccount.addBalance()
newAccount.setAge(17)

