import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";

type MessageTimeProps = {
  added: string;
};

const MessageTime = ({ added }: MessageTimeProps) => {
  const [, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="text-xs opacity-50">{`Sent ${formatDistance(
      new Date(),
      added,
      {
        includeSeconds: true,
      }
    )} ago`}</p>
  );
};

export default MessageTime;
