import { Router } from "express";
import * as OrderController from "./orders.controller";

const router = Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);
// router.get("/:id", OrderController.getOrderById);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

export const orderRouter = router;

// export const carRouter = router;
