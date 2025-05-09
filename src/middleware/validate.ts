import { Request, Response, NextFunction } from "express";
// npm install zod
import { z } from "zod";

export const validate =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      return res.status(400).json({ error: err.errors });
    }
  };
