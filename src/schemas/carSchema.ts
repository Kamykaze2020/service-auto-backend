import { z } from "zod";

export const carSchema = z.object({
  licensePlate: z.string().min(1),
  vin: z.string().min(1),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().min(1900).max(new Date().getFullYear()),
  engineType: z.enum(["diesel", "benzina", "hibrid", "electric"]),
  engineSize: z.number().positive(),
  horsepower: z.number().int().positive(),
  kilowatts: z.number().positive(),
  clientId: z.number().int().positive(),
});

export const updateCarSchema = carSchema.partial();
