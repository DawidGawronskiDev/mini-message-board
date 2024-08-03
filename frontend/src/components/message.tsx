import { type Message } from "@/types";
import { formatDistance } from "date-fns";
import Avatar from "./avatar";

type MessageProps = {
  message: Message;
};

const Message = ({ message }: MessageProps) => {
  return (
    <li>
      <div className="flex items-start gap-5 p-5">
        <Avatar />
        <div className="flex flex-col gap-5">
          <div>
            <span className="font-bold">{message.user}</span>
            <p className="text-xs opacity-50">{`Sent ${formatDistance(
              new Date(),
              message.added,
              {
                includeSeconds: true,
              }
            )} ago`}</p>
          </div>
          <p>{message.text}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
