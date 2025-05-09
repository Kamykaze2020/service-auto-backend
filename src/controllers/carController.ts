import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getCars = async (req: Request, res: Response) => {
  const cars = await prisma.car.findMany();
  res.json(cars);
};

export const createCar = async (req: Request, res: Response) => {
  const car = await prisma.car.create({ data: req.body });
  res.status(201).json(car);
};

export const getCarById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const car = await prisma.car.findUnique({ where: { id } });
  car ? res.json(car) : res.status(404).json({ error: "Car not found" });
};

export const updateCar = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const car = await prisma.car.update({ where: { id }, data: req.body });
  res.json(car);
};

export const deactivateCar = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await prisma.car.delete({ where: { id } });
  res.status(204).send();
};
