import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { carRouter } from "./app/modules/cars/cars.route";
import { orderRouter } from "./app/modules/orders/orders.route";

const app: Application = express();
const port = 3000;

// Middleware: Body parser and CORS
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1/cars", carRouter);
app.use("/api/v1/orders", orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAController);

// 404 Handler for Undefined Routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Resource not found",
    success: false,
    error: {
      name: "NotFoundError",
      message: `Cannot ${req.method} ${req.path}`,
    },
  });
});

// Generic Error Handling Middleware
app.use(
  (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction // Required for middleware even if unused
  ) => {
    const statusCode = err.statusCode || 500; // Default to Internal Server Error
    const errorResponse = {
      message: err.message || "An unexpected error occurred",
      success: false,
      error: {
        name: err.name || "Error",
        message: err.message || "Unknown error occurred",
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
      },
    };

    if (err.errors) {
      errorResponse.error.errors = err.errors; // Include validation or other detailed errors if present
    }

    res.status(statusCode).json(errorResponse);
  }
);

export default app;
