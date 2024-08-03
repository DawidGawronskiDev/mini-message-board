import { createContext, useState, type ReactNode } from "react";

type Modal = {
  isOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<Modal>({
  isOpen: false,
  toggleModal: () => {},
  closeModal: () => {},
});

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalContext = {
    isOpen,
    toggleModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
