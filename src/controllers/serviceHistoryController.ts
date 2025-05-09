import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getHistories = async (req: Request, res: Response) => {
  const histories = await prisma.serviceHistory.findMany({
    include: { appointment: true },
  });
  res.json(histories);
};

export const createHistory = async (req: Request, res: Response) => {
  const history = await prisma.serviceHistory.create({ data: req.body });
  res.status(201).json(history);
};
