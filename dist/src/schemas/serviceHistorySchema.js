"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceHistorySchema = void 0;
const zod_1 = require("zod");
exports.serviceHistorySchema = zod_1.z.object({
    appointmentId: zod_1.z.number().int().positive(),
    problemsReported: zod_1.z.string().min(1),
    workDone: zod_1.z.string().min(1),
    replacedParts: zod_1.z.string().min(1),
    durationMins: zod_1.z.number().int().positive().multipleOf(10),
});
