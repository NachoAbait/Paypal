import { Router } from "express";
import { createOrder } from "../Controllers/ControllerPayments.js";

const router = Router();

router.post("/create-orden", createOrder);

router.get("/success", (req, res) => {
  res.json({ msg: "success" });
});

router.get("/failure", (req, res) => {
  res.send("failure");
});
router.get("/pending", (req, res) => {
  res.send("pending");
});

router.post("/webhook", (req, res) => {
  res.send("webhook");
});

export default router;
