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
exports.createHistory = exports.getHistories = void 0;
const prisma_1 = require("../prisma");
const getHistories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const histories = yield prisma_1.prisma.serviceHistory.findMany({
        include: { appointment: true },
    });
    res.json(histories);
});
exports.getHistories = getHistories;
const createHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const history = yield prisma_1.prisma.serviceHistory.create({ data: req.body });
    res.status(201).json(history);
});
exports.createHistory = createHistory;
