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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var knex_1 = require("knex");
/**
 *
 * KNEX
 */
var connection = knex_1["default"]({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    }
});
dotenv_1["default"].config();
/**
 * EXPRESS
 */
var app = express_1["default"]();
// function getActorById(id: string) {}
// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const actor = await getActorById(id);
//     res.status(200).send(actor);
//   } catch (err) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });
app.use(express_1["default"].json());
var searchActorByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connection.raw("\n    SELECT * FROM Actor WHERE name = '" + name + "'\n  ")];
            case 1:
                result = _a.sent();
                console.log(searchActorByName);
                return [2 /*return*/, result[0][0]];
        }
    });
}); };
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("Server is running in http://localhost:" + address.port);
    }
    else {
        console.error("Failure upon starting server.");
    }
});
// const getActorById = async (id: string): Promise<any> => {
//   await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `);
// };
// const createActor = async (
//   id: string,
//   name: string,
//   salary: number,
//   dateOfBirth: Date,
//   gender: string
// ): Promise<void> => {
//   await connection
//     .insert({
//       id: id,
//       name: name,
//       salary: salary,
//       birth_date: dateOfBirth,
//       gender: gender,
//     })
//     .into("Actor");
// };
// createActor("002", "Tony Ramos", 4000000, new Date("2020-10-05"), "male");
// const searchActor = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//   `);
//   return result;
// };
// const countActors = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//   `);
//   const count = result[0][0].count;
//   return count;
// };
// const updateSalary = async (id: string, salary: number): Promise<any> => {
//   await connection("Actor")
//     .update({
//       salary: salary,
//     })
//     .where("id", id);
// };
// const deleteActor = async (id: string): Promise<any> => {
//   await connection("Actor").delete().where("id", id);
// };
// const avgSalary = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//     .avg("salary as average")
//     .where({ gender });
//   return result[0].average;
// };
// (async () => {
//   console.log(await avgSalary("female"));
// })();
// const createMovie = async (
//   id: string,
//   title: string,
//   synopsis: string,
//   releaseDate: Date,
//   playingLimitDate: Date
// ) => {
//   await connection
//     .insert({
//       id: id,
//       title: title,
//       synopsis: synopsis,
//       releas_date: releaseDate,
//       playing_limit_date: playingLimitDate,
//     })
//     .into("Movie");
// };
// const searchMovie = async (term: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Movie 
//     WHERE title LIKE '%${term}%' OR synposis LIKE '%${term}%'
//     ORDER BY release_date
//   `);
//   return result[0];
// };
// app.get("/movie/search", async (req: Request, res: Response) => {
//   try {
//     const movies = await searchMovie(req.query.query as string);
//     res.status(200).send({
//       movies: movies,
//     });
//   } catch (err) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });
