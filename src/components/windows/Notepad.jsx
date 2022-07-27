import { useState } from "react";
import WindowTopButton from "../WindowTopButton";
import NotepadIcon from "../../assets/icons/Notepad.png";
import MaximizeIcon from "../../assets/icons/Maximize.svg";
import MinimizeIcon from "../../assets/icons/Minimize.svg";
import CloseIcon from "../../assets/icons/Close.svg";

function Notepad({ onClose, onMaximize }) {
  const [text, setText] = useState("");

  return (
    <div
      id="notepad"
      className="window absolute flex flex-col w-[730px] h-[500px] min-w-[545px] min-h-[500px] top-[15%] left-[20%] p-1 resize overflow-auto"
    >
      <div className="w-full h-11 bg-blue-200 flex justify-between">
        <div className="h-full flex items-center px-2 space-x-2 select-none">
          <img src={NotepadIcon} alt="Notepad" className="h-7 select-none" />
          <p className="text-xl truncate">Untitled - Notepad</p>
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
        <p className="first-letter:underline">Search</p>
        <p className="first-letter:underline">Help</p>
      </div>

      <div className="window__inner w-full h-full">
        <form className="w-[97%] h-[94%] m-1">
          <textarea
            rows="auto"
            aria-label="Text area"
            className="w-full h-full m-2 outline-none border-none text-black text-3xl resize-none"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Notepad;
