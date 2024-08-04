import MessageForm from "./message-form";
import Modal from "./modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ModalClose from "./modal-close";

const MessageModal = () => {
  return (
    <Modal className="container bg-transparent">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Message</CardTitle>
              <CardDescription>Send what's on your mind!</CardDescription>
            </div>
            <ModalClose />
          </div>
        </CardHeader>
        <CardContent>
          <MessageForm />
        </CardContent>
      </Card>
    </Modal>
  );
};

export default MessageModal;
