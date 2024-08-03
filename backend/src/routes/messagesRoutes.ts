import express, { Request, Response } from "express";
import readMessages from "../util/readMessages";
import writeMessage from "../util/writeMessage";
import createMessage from "../util/createMessage";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const messages = readMessages();
  res.json(messages);
});

router.post("/", (req: Request, res: Response) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(404).json({ message: "User and text are required." });
  }

  writeMessage([createMessage(user, text), ...readMessages()]);

  res.status(200).json({ message: "Message created successfully." });
});

export default router;
