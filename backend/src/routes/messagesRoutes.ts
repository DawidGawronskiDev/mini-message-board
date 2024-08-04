import express, { Request, Response } from "express";
import readMessages from "../util/readMessages";
import writeMessage from "../util/writeMessage";
import createMessage from "../util/createMessage";
import z from "zod";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const messages = readMessages();
  res.json(messages);
});

const messageSchema = z.object({
  user: z
    .string()
    .min(3, { message: "Username must contain at least 3 character(s)" })
    .max(32, { message: "Username can't be longer than 32 character(s)" }),
  text: z
    .string()
    .min(3, { message: "Message must contain at least 3 character(s)" })
    .max(255, { message: "Username can't be longer than 255 character(s)" }),
});

router.post("/", (req: Request, res: Response) => {
  const { user, text } = req.body;

  const result = messageSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  writeMessage([createMessage(user, text), ...readMessages()]);

  res.status(200).json({ message: "Message created successfully." });
});

export default router;
