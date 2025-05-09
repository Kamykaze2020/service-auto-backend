import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Service Auto API",
      version: "1.0.0",
      description: "API documentation for the car service management platform",
    },
  },
  apis: ["./src/routes/*.ts"], // Path to route files with JSDoc comments
});
