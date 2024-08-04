import { apiUrl } from "@/lib/urls";
import { Message } from "@/types";
import axios from "axios";

export const getMessages = async () => {
  const resposne = await axios.get<Message[]>(apiUrl + "messages");
  return resposne.data;
};
