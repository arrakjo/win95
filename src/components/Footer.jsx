import Button from "./Button";
import Clock from "./Clock";
import ProgramTab from "./ProgramTab";

// Icons
import StartIcon from "../assets/icons/Start.svg";
import ComputerIcon from "../assets/icons/Computer.svg";
import FolderIcon from "../assets/icons/Folder.svg";
import NetworkIcon from "../assets/icons/Network.svg";

function Footer() {
  return (
    <footer
      id="taskbar"
      className="w-full z-10 p-2 flex justify-between items-center bg-grey-100 fixed bottom-0 left-0 border-t-2 border-t-grey-20"
    >
      <Button icon={StartIcon} label="Start" />

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
