import WindowTopButton from "../WindowTopButton";
import ComputerIcon from "../../assets/icons/Computer.svg";
import MaximizeIcon from "../../assets/icons/Maximize.svg";
import MinimizeIcon from "../../assets/icons/Minimize.svg";
import CloseIcon from "../../assets/icons/Close.svg";

function MyComputer({ onClose, onMaximize }) {
  return (
    <div
      id="mycomputer"
      className="window absolute flex flex-col w-[730px] h-[500px] top-[25%] left-[33%] p-1"
    >
      <div className="w-full h-11 bg-blue-200 flex justify-between">
        <div className="h-full flex items-center px-2 space-x-2 select-none">
          <img
            src={ComputerIcon}
            alt="My Computer"
            className="h-8 select-none"
          />
          <p className="text-xl">My Computer</p>
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

      <div className="window__inner w-full h-full"></div>

      <div className="w-full h-1 bg-grey-100"></div>
      <div className="w-full h-12 flex">
        <div className="window__bottom w-1/2"></div>
        <div className="window__bottom w-1/2"></div>
      </div>
    </div>
  );
}

export default MyComputer;
