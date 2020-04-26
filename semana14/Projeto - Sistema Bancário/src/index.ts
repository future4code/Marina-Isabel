export type user = {
    name: string,
    cpf: number,
    age: number
}

export const data: user = {
    name: "Maria",
    cpf: 12345678912,
    age: 18,
}

export type accountTransactions = {
    value: number, 
    date: number, 
    description: string
}

export const transactions: accountTransactions = {
    value: 0, 
    date: 112200,
    description: "Oi"
}
