"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchema = void 0;
const zod_1 = require("zod");
exports.appointmentSchema = zod_1.z.object({
    carId: zod_1.z.number().int().positive(),
    contactMethod: zod_1.z.enum(["email", "telefon", "fizic"]),
    action: zod_1.z.string().min(1),
    date: zod_1.z.coerce.date().refine((date) => {
        const hour = date.getHours();
        return hour >= 8 && hour < 17;
    }, {
        message: "Appointment must start between 08:00 and 17:00",
    }),
    durationMins: zod_1.z.number().int().positive().multipleOf(30),
});
