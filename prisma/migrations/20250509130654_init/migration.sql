-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "licensePlate" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "engineType" TEXT NOT NULL,
    "engineSize" REAL NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "kilowatts" REAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    CONSTRAINT "Car_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carId" INTEGER NOT NULL,
    "contactMethod" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "durationMins" INTEGER NOT NULL,
    CONSTRAINT "Appointment_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ServiceHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "appointmentId" INTEGER NOT NULL,
    "problemsReported" TEXT NOT NULL,
    "workDone" TEXT NOT NULL,
    "replacedParts" TEXT NOT NULL,
    "durationMins" INTEGER NOT NULL,
    CONSTRAINT "ServiceHistory_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceHistory_appointmentId_key" ON "ServiceHistory"("appointmentId");
