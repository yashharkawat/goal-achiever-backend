import express from "express";
const router = express.Router();
import userServices from "../functions/user/userServices.js";

router.get("/", async (req, res) => {
  const finalResponse = await userServices.getUsers();
  res.send(finalResponse);
});

router.post("/", async (req, res) => {
  const { params, body } = req;

  const finalResponse = await userServices.postUser(params, body);
  res.send(finalResponse);
});

export default router;
