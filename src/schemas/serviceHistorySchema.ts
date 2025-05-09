import { z } from "zod";

export const serviceHistorySchema = z.object({
  appointmentId: z.number().int().positive(),
  problemsReported: z.string().min(1),
  workDone: z.string().min(1),
  replacedParts: z.string().min(1),
  durationMins: z.number().int().positive().multipleOf(10),
});
