"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchema = void 0;
const zod_1 = require("zod");
exports.appointmentSchema = zod_1.z.object({
    carId: zod_1.z.number().int().positive(),
    contactMethod: zod_1.z.enum(["email", "telefon", "fizic"]),
    action: zod_1.z.string().min(1),
    date: zod_1.z.coerce.date(), // accepts ISO string and coerces to Date
    durationMins: zod_1.z.number().int().positive().multipleOf(30),
});
