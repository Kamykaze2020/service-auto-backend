# Service-auto Backend Application in Typescript

This is the backend application for the **Proiect Internship Info World 2025**, built with **TypeScript**, **Express**, **Prisma**, and **SQLite**.  
It provides a RESTful API to manage.

Having experience with Django and with using Swagger I decided to implement it in this typescript project too, for better clarity of API Classes and a better documentation.

![swagger](https://github.com/user-attachments/assets/5a4c4737-7eb9-4f8e-ab3a-165a33362251)


## Technologies Used

- **Node.js + TypeScript**
- **Express.js**
- **Prisma ORM**
- **SQLite (local database)**
- **Zod (schema validation)**
- **Swagger (API documentation)**

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
2. Create the SQLite database and tables:
   ```bash
   npx prisma migrate dev --name init
3. Seed test data:
   ```bash
   npm run seed
4. Start the server:
   ```bash
   npm start

## 🌐 Server & API Access

- **Base URL:** [http://localhost:3000](http://localhost:3000)
- **Swagger UI:** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)  
  ↳ *Swagger is generated using JSDoc comments and `swagger-jsdoc`*

---

## 🗂️ Database & Schema

- **Database location:** `prisma/dev.db` (auto-created by Prisma)
- **Schema definition:** `prisma/schema.prisma`
- **Migration script:**  
  `prisma/migrations/<timestamp>_init/migration.sql`
- **Seed data script:** `prisma/seed.ts`  
  ↳ Run with:
  ```bash
  npm run seed

## 🧪 API Testing

* HTTP tests are written using **HttpYac** instead of Postman.
* You can run tests directly in `test.http` using the [HttpYac extension](https://marketplace.visualstudio.com/items?itemName=anweber.vscode-httpyac) for VS Code.

---

## 📬 Contact

For any questions or feedback, feel free to contact me:
📧 **[vasileandrei.popa@gmail.com](mailto:vasileandrei.popa@gmail.com)**


