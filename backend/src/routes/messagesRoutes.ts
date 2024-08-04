import express, { Request, Response } from "express";
import z from "zod";
import mongoose from "mongoose";
import Message from "../models/message-model";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const messages = await Message.find({}).select("user text added _id");

    return res.status(200).json(messages.reverse());
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
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

router.post("/", async (req: Request, res: Response) => {
  const { user, text } = req.body;

  const result = messageSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const newMessage = await Message.create({ user: user, text: text });

    if (!newMessage) {
      return res.status(404).json({ message: "Failed to create a message" });
    }

    await newMessage.save();

    res.status(200).json({ message: "Message created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
