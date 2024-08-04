import { type Message } from "@/types";
import { formatDistance } from "date-fns";
import Avatar from "./avatar";

type MessageProps = {
  message: Message;
  index: number;
};

const Message = ({ message, index }: MessageProps) => {
  return (
    <li style={{ animationDelay: index * 100 + "ms" }} className={`fade-in`}>
      <div className="grid grid-cols-[40px_1fr] gap-4">
        <Avatar className="row-span-2" />
        <div>
          <p className="font-bold">{message.user}</p>
          <p className="text-xs opacity-50">{`Sent ${formatDistance(
            new Date(),
            message.added,
            {
              includeSeconds: true,
            }
          )} ago`}</p>
        </div>
        <p className="break-all">{message.text}</p>
      </div>
    </li>
  );
};

export default Message;
