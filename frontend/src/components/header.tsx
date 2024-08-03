import { useContext } from "react";
import { Button } from "./ui/button";
import ModalContext from "@/store/modalContext";

const Header = () => {
  const { toggleModal } = useContext(ModalContext);

  return (
    <>
      <header className="fixed left-0 top-0 h-16 w-full bg-red-300 flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between">
          <h1>Mini Messaging App</h1>
          <Button onClick={toggleModal}>Send Message</Button>
        </div>
      </header>
      <div className="mt-24" />
    </>
  );
};

export default Header;
