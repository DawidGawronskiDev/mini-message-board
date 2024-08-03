import MessageForm from "./message-form";
import Modal from "./modal";

const MessageModal = () => {
  return (
    <Modal className="p-6 rounded container">
      <MessageForm />
    </Modal>
  );
};

export default MessageModal;
