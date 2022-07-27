import WindowTopButton from "../WindowTopButton";
import ProgramIcon from "../ProgramIcon";
import ComputerIcon from "../../assets/icons/Computer.svg";
import MaximizeIcon from "../../assets/icons/Maximize.svg";
import MinimizeIcon from "../../assets/icons/Minimize.svg";
import CloseIcon from "../../assets/icons/Close.svg";
import Drive1Icon from "../../assets/icons/Drive1.svg";
import Drive2Icon from "../../assets/icons/Drive2.svg";
import ControlPanelIcon from "../../assets/icons/ControlPanel.svg";
import PrinterIcon from "../../assets/icons/Printer.svg";

function MyComputer({ onClose, onMaximize }) {
  return (
    <div
      id="mycomputer"
      className="window absolute flex flex-col w-[730px] h-[500px] min-w-[306px] top-[25%] left-[33%] p-1 resize overflow-auto"
    >
      <div className="w-full h-11 bg-blue-200 flex justify-between">
        <div className="h-full flex items-center px-2 space-x-2 select-none">
          <img
            src={ComputerIcon}
            alt="My Computer"
            className="h-7 select-none"
          />
          <p className="text-xl truncate">My Computer</p>
        </div>
        <div className="h-full flex items-center px-2 space-x-2 select-none">
          <WindowTopButton icon={MinimizeIcon} onClick={onClose} />
          <WindowTopButton icon={MaximizeIcon} onClick={onMaximize} />
          <WindowTopButton icon={CloseIcon} onClick={onClose} />
        </div>
      </div>

      <div className="w-full h-12 bg-grey-100 text-black flex items-center space-x-7 px-5 select-none">
        <p className="first-letter:underline">File</p>
        <p className="first-letter:underline">Edit</p>
        <p className="first-letter:underline">View</p>
        <p className="first-letter:underline">Help</p>
      </div>

      <div className="window__inner w-full h-full overflow-y-auto">
        <div className="w-full h-full p-6 flex justify-start items-start flex-wrap gap-5 text-black">
          <ProgramIcon icon={Drive1Icon} label="Removable Disk (A:)" />
          <ProgramIcon icon={Drive2Icon} label="Windows 95 (C:)" />
          <ProgramIcon icon={ControlPanelIcon} label="Control Panel" />
          <ProgramIcon icon={PrinterIcon} label="Printers" />
        </div>
      </div>

      <div className="w-full h-1 bg-grey-100"></div>
      <div className="w-full h-12 flex">
        <div className="window__bottom w-1/2"></div>
        <div className="window__bottom w-1/2"></div>
      </div>
    </div>
  );
}

export default MyComputer;
