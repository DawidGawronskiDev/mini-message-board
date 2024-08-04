import { type Message } from "@/types";
import { useState } from "react";
import Messages from "./messages";

import MessagesPagination from "./messages-pagination";

type MessagesContentProps = {
  messages: Message[];
};

const MessagesContent = ({ messages }: MessagesContentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedMessages = messages.slice(startIndex, startIndex + pageSize);

  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col justify-between gap-4 pb-4">
      <Messages messages={paginatedMessages} />
      <MessagesPagination
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        size={messages.length / pageSize}
      />
    </div>
  );
};

export default MessagesContent;
