import { type Message } from "@/types";
import Avatar from "./avatar";
import MessageTime from "./message-time";

type MessageProps = {
  message: Message;
  index: number;
};

const Message = ({ message, index }: MessageProps) => {
  return (
    <div style={{ animationDelay: index * 100 + "ms" }} className={`fade-in`}>
      <div className="grid grid-cols-[40px_1fr] gap-4">
        <Avatar className="row-span-2" />
        <div>
          <p className="font-bold">{message.user}</p>
          <MessageTime added={message.added} />
        </div>
        <p className="break-all">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
