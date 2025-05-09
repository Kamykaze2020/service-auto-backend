import { z } from "zod";

export const appointmentSchema = z.object({
  carId: z.number().int().positive(),
  contactMethod: z.enum(["email", "telefon", "fizic"]),
  action: z.string().min(1),
  date: z.coerce.date().refine(
    (date) => {
      const hour = date.getHours();
      return hour >= 8 && hour < 17;
    },
    {
      message: "Appointment must start between 08:00 and 17:00",
    }
  ),
  durationMins: z.number().int().positive().multipleOf(30),
});
