import { type ReactNode } from "react";
import { type Message } from "./types";
import useFetch from "./hooks/useFetch";
import Messages from "./components/messages";
import Header from "./components/header";
import MessageModal from "./components/message-modal";

export default function App() {
  const {
    data: messages,
    isLoading,
    error,
  } = useFetch<Message[]>(
    "http://localhost:3000/messages",
    "Failed to fetch messages"
  );

  let content: ReactNode;

  if (isLoading) {
    content = <p className="animate-pulse">Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (messages) {
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
