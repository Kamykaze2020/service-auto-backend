import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getClients = async (req: Request, res: Response) => {
  const clients = await prisma.client.findMany({ include: { cars: true } });
  res.json(clients);
};

export const getClientById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const client = await prisma.client.findUnique({
    where: { id },
    include: { cars: true },
  });

  if (!client) {
    res.status(404).json({ error: "Client not found" });
    return;
  }

  res.json(client);
};

export const createClient = async (req: Request, res: Response) => {
  const { firstName, lastName, phone, email } = req.body;
  const client = await prisma.client.create({
    data: { firstName, lastName, phone, email },
  });
  res.status(201).json(client);
};

export const updateClient = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const updated = await prisma.client.update({
      where: { id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: "Client not found or invalid data" });
  }
};

export const deactivateClient = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const client = await prisma.client.update({
      where: { id },
      data: { active: false },
    });
    res.json({ message: "Client deactivated", client });
  } catch (error) {
    res.status(404).json({ error: "Client not found" });
  }
};
