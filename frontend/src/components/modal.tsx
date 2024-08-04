import ModalContext from "@/store/modalContext";
import { type ReactNode, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  className?: string;
};

const Modal = ({ children, className = "" }: ModalProps) => {
  const { isOpen } = useContext(ModalContext);
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      isOpen ? ref.current.showModal() : ref.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={ref} className={"px-0 fade-in " + className}>
      {children}
    </dialog>,
    document.querySelector("#modal")!
  );
};

export default Modal;
