import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response} from "express";
import { AddressInfo } from "net";
dotenv.config()


const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port:3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
})

async function main(): Promise<void> {
    await connection.raw(`
        CREATE TABLE TodoListUser (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
    `);
    console.log("Tabela criada com sucesso")
}

main();




// const app = express()

// app.put("/user", async (req: Request, res:Response) => {
//     res.send({
//         message: ""
//     })
// })

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//       const address = server.address() as AddressInfo;
//       console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//       console.error(`Failure upon starting server.`);
//     }
//   });