import MessageForm from "./message-form";
import Modal from "./modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const MessageModal = () => {
  return (
    <Modal className="container bg-transparent">
      <Card>
        <CardHeader>
          <CardTitle>Message</CardTitle>
          <CardDescription>Send what's on your mind!</CardDescription>
        </CardHeader>
        <CardContent>
          <MessageForm />
        </CardContent>
      </Card>
    </Modal>
  );
};

export default MessageModal;
