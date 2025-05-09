"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carSchema = void 0;
const zod_1 = require("zod");
exports.carSchema = zod_1.z.object({
    licensePlate: zod_1.z.string().min(1),
    vin: zod_1.z.string().min(1),
    make: zod_1.z.string().min(1),
    model: zod_1.z.string().min(1),
    year: zod_1.z.number().min(1900).max(new Date().getFullYear()),
    engineType: zod_1.z.enum(["diesel", "benzina", "hibrid", "electric"]),
    engineSize: zod_1.z.number().positive(),
    horsepower: zod_1.z.number().int().positive(),
    kilowatts: zod_1.z.number().positive(),
    clientId: zod_1.z.number().int().positive(),
});
