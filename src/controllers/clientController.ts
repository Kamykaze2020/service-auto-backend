import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getClients = async (req: Request, res: Response) => {
  const clients = await prisma.client.findMany({ include: { cars: true } });
  res.json(clients);
};

export const createClient = async (req: Request, res: Response) => {
  const { firstName, lastName, phone, email } = req.body;
  const client = await prisma.client.create({
    data: { firstName, lastName, phone, email },
  });
  res.status(201).json(client);
};
