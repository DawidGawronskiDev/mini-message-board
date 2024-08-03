import { v4 as uuidv4 } from "uuid";

const createMessage = (user: string, text: string) => {
  const message = {
    id: uuidv4(),
    user: user,
    text: text,
    added: new Date().toISOString(),
  };

  return message;
};

export default createMessage;
