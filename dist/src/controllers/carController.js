"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateCar = exports.updateCar = exports.getCarById = exports.createCar = exports.getCars = void 0;
const prisma_1 = require("../prisma");
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cars = yield prisma_1.prisma.car.findMany();
    res.json(cars);
});
exports.getCars = getCars;
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield prisma_1.prisma.car.create({ data: req.body });
    res.status(201).json(car);
});
exports.createCar = createCar;
const getCarById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const car = yield prisma_1.prisma.car.findUnique({ where: { id } });
    car ? res.json(car) : res.status(404).json({ error: "Car not found" });
});
exports.getCarById = getCarById;
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const car = yield prisma_1.prisma.car.update({ where: { id }, data: req.body });
    res.json(car);
});
exports.updateCar = updateCar;
const deactivateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield prisma_1.prisma.car.delete({ where: { id } });
    res.status(204).send();
});
exports.deactivateCar = deactivateCar;
