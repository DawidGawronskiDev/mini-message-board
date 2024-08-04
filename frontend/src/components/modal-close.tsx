import ModalContext from "@/store/modalContext";
import { X } from "lucide-react";
import { useContext } from "react";

const ModalClose = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <button onClick={closeModal}>
      <X />
    </button>
  );
};

export default ModalClose;
