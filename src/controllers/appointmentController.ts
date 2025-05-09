import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getAppointments = async (req: Request, res: Response) => {
  const appointments = await prisma.appointment.findMany({
    include: { car: true },
  });
  res.json(appointments);
};

export const createAppointment = async (req: Request, res: Response) => {
  const appointment = await prisma.appointment.create({ data: req.body });
  res.status(201).json(appointment);
};
