import express from "express";
const router = express.Router();
import loginServices from "../functions/login/loginServices.js";

router.post("/", async (req, res) => {
  const { params, body } = req;

  const finalResponse = await loginServices.login(params, body);
  res.send(finalResponse);
});

export default router;
