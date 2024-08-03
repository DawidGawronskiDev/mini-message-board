import { writeFileSync } from "fs";
import { type Messages } from "../types";

const writeMessage = (messages: Messages) => {
  writeFileSync("./src/messages.json", JSON.stringify(messages));
};

export default writeMessage;
