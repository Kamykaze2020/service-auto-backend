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

### 🛠️ Setup Instructions

1. Install dependencies:
   ```bash
   npm install

Create the SQLite database and tables:

npx prisma migrate dev --name init

Seed test data:
npm run seed

Start the server:
npm start
