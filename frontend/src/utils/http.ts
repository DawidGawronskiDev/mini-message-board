import { Message } from "@/types";
import axios from "axios";

export const getMessages = async () => {
  const resposne = await axios.get<Message[]>("http://localhost:3000/messages");
  return resposne.data;
};
