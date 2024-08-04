import { type ReactNode } from "react";
import Messages from "./components/messages";
import Header from "./components/header";
import MessageModal from "./components/message-modal";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "./utils/http";

export default function App() {
  const {
    data: messages,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["messages"], queryFn: getMessages });

  let content: ReactNode;

  if (isLoading) {
    content = <p className="animate-pulse">Loading...</p>;
  }

  if (isError) {
    content = <p className="text-red-500">Failed to fetch messages</p>;
  }

  if (messages && messages.length > 0) {
    content = <Messages messages={messages} />;
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
