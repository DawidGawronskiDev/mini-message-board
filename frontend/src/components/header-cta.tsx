import { useContext } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import ModalContext from "@/store/modalContext";

const HeaderCTA = () => {
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="flex items-center justify-center gap-4">
      <ModeToggle />
      <Button onClick={toggleModal}>Message</Button>
    </div>
  );
};

export default HeaderCTA;
