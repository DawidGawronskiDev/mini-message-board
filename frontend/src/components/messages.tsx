import { type Messages } from "@/types";
import Message from "./message";
import { Separator } from "./ui/separator";

type MessagesProps = {
  messages: Messages;
};

const Messages = ({ messages }: MessagesProps) => {
  return (
    <ul className="space-y-6">
      {messages.map((message, index) => (
        <li key={message._id} className="space-y-6">
          <Message message={message} index={index} />
          {index < messages.length - 1 && <Separator />}
        </li>
      ))}
    </ul>
  );
};

export default Messages;
