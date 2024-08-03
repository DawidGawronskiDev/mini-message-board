import { readFileSync } from "fs";

const readMessages = () => {
  const data = readFileSync("./src/messages.json", "utf-8");
  const parsedData = JSON.parse(data);
  return parsedData;
};

export default readMessages;
