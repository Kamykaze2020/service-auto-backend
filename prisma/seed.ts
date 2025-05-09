import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const client = await prisma.client.create({
    data: {
      firstName: "Vasile-Andrei",
      lastName: "Popa",
      phone: "0722123456",
      email: "popa@email.com",
      cars: {
        create: [
          {
            licensePlate: "B123XYZ",
            vin: "WDB123456789",
            make: "Dacia",
            model: "Logan",
            year: 2019,
            engineType: "benzina",
            engineSize: 1.4,
            horsepower: 90,
            kilowatts: 66.2,
          },
        ],
      },
    },
  });

  console.log("Seeded client with ID:", client.id);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
