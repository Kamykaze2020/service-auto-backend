import { z } from "zod";

export const appointmentSchema = z.object({
  carId: z.number().int().positive(),
  contactMethod: z.enum(["email", "telefon", "fizic"]),
  action: z.string().min(1),
  date: z.coerce.date(), // accepts ISO string and coerces to Date
  durationMins: z.number().int().positive().multipleOf(30),
});
