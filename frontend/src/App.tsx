import { type ReactNode } from "react";
import { getMessages } from "./utils/http";
import { useQuery } from "@tanstack/react-query";
import Header from "./components/header";
import MessageModal from "./components/message-modal";

import MessagesContent from "./components/messages-content";

export default function App() {
  const {
    data: messages,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["messages"], queryFn: getMessages });

  console.log(messages);

  let content: ReactNode;

  if (isLoading) {
    content = <p className="animate-pulse">Loading...</p>;
  }

  if (isError) {
    content = <p className="text-red-500">Failed to fetch messages</p>;
  }

  if (messages && messages.length > 0) {
    content = <MessagesContent messages={messages} />;
  }

  if (messages && messages.length === 0) {
    content = <p className="opacity-50">There are no messages</p>;
  }

  return (
    <main className="font-inter container">
      <Header />
      {content}
      <MessageModal />
    </main>
  );
}
