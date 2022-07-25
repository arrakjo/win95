import Button from "./Button";
import Clock from "./Clock";
import ProgramTab from "./ProgramTab";
import { useState } from "react";

// Icons
import StartIcon from "../assets/icons/Start.svg";
import ComputerIcon from "../assets/icons/Computer.svg";
import FolderIcon from "../assets/icons/Folder.svg";
import NetworkIcon from "../assets/icons/Network.svg";
import Start from "./Start";

function Footer() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(!start);
  };

  return (
    <footer
      id="taskbar"
      className="w-full z-10 px-2 py-1 flex justify-between items-center bg-grey-100 fixed bottom-0 left-0 border-t-2 border-t-grey-20"
    >
      {start && <Start />}

      <Button icon={StartIcon} label="Start" onClick={handleStart} />

      <div className="w-full pl-2 flex items-center">
        <ProgramTab icon={ComputerIcon} label="My Computer" />
        <ProgramTab icon={FolderIcon} label="Documents" />
        <ProgramTab icon={NetworkIcon} label="Network Neighbourhood" />
      </div>

      <Clock />
    </footer>
  );
}

export default Footer;
