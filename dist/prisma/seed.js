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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield prisma.client.create({
            data: {
                firstName: "Vasile-Andrei",
                lastName: "Popa",
                phone: "0722123456",
                email: "popa@email.com",
                cars: {
                    create: [
                        {
                            licensePlate: "B123XYZ",
                            vin: "WDB123456789",
                            make: "Dacia",
                            model: "Logan",
                            year: 2019,
                            engineType: "benzina",
                            engineSize: 1.4,
                            horsepower: 90,
                            kilowatts: 66.2,
                        },
                    ],
                },
            },
        });
        console.log("Seeded client with ID:", client.id);
    });
}
main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
