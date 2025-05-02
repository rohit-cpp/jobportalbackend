import express from "express";
import {
  submitFeedback,
  getAllFeedback,
} from "../controllers/feedback.controller.js";

const router = express.Router();

router.route("/submit").post(submitFeedback); // POST /api/feedback/submit
router.route("/all").get(getAllFeedback); // GET /api/feedback/all

export default router;
