import { readFileSync } from "fs";
import { Messages } from "../types";

const readMessages = (): Messages => {
  const data = readFileSync("./src/messages.json", "utf-8");
  const parsedData = JSON.parse(data);
  return parsedData;
};

export default readMessages;
