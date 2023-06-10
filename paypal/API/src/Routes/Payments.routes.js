import { Router } from "express";
import {
  createOrder,
  captureOrden,
  cancelOrder,
} from "../Controllers/ControllerPayments.js";

const router = Router();

router.get("/create-orden", createOrder);

router.get("/capture-order", captureOrden);

router.get("/cancel-order", cancelOrder);

export default router;
