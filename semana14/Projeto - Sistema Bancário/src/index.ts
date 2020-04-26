type client = {
    name: string,
    cpf: number,
    dateOfBirth: number
}

const data: client = {
    name: "Maria",
    cpf: 12345678912,
    dateOfBirth: 18,
}

type accountTransactions = {
    name: string, 
    cpf: number, 
    recipient: string,
    recipentCPF: number,
    value: number
}

const transactions: accountTransactions = {
    name: "Joana",
    cpf: 12345678912, 
    recipient: "José",
    recipentCPF: 12345678912,
    value: 1000
}
