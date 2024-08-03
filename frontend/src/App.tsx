import { type ReactNode } from "react";
import { type Message } from "./types";
import useFetch from "./hooks/useFetch";
import Messages from "./components/messages";
import Header from "./components/header";

export default function App() {
  const {
    data: messages,
    isLoading,
    error,
  } = useFetch<Message[]>(
    "http://localhost:3000/messages",
    "Failed to fetch messages"
  );

  console.log(messages);

  let content: ReactNode;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (messages) {
    content = <Messages messages={messages} />;
  }

  return (
    <main className="font-inter container">
      <Header />
      {content}
    </main>
  );
}
