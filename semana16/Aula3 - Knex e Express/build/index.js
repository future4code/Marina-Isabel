"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = knex_1.default({
    client: "mysql",
    connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        port: 3306,
        user: "sagan_marina",
        password: "HTQVQRX53E",
        database: "sagan_marina_db",
    },
});
// const app = express();
// app.use(express.json());
// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });
// async function main() {
//     await connection.raw(`
//     CREATE TABLE PRODUCT (
//         id VARCHAR(255) PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         price FLOAT NOT NULL
//     )
//     `);
//     console.log("Tabela Criada")
// }
// main();
// const searchActorByName = async(name: string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT * FROM ACTOR WHERE name = "${name}"
//     `);
//     return result
// }
const countActorsByGender = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection.raw(`
    SELECT COUNT(*) FROM ACTOR WHERE gender = "${gender}"
    `);
    console.log(countActorsByGender);
    return result;
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
main();
