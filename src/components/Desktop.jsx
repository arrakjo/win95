import { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import ProgramIcon from "./ProgramIcon";
import MyComputer from "./windows/MyComputer";
import Notepad from "./windows/Notepad";

// Icons
import ComputerIcon from "../assets/icons/Computer.svg";
import RecycleIcon from "../assets/icons/Recycle.svg";
import NetworkIcon from "../assets/icons/Network.svg";
import PrinterIcon from "../assets/icons/Printer.svg";
import NotepadIcon from "../assets/icons/Notepad.png";

function Desktop() {
  const [myComputer, setMyComputer] = useState(false);
  const [notepad, setNotepad] = useState(false);

  const handleMyComputer = () => {
    setMyComputer(!myComputer);
  };
  const handleMaximizeMyComputer = () => {
    const element = document.getElementById("mycomputer");
    element.classList.toggle("window--max");
  };

  const handleNotepad = () => {
    setNotepad(!notepad);
  };
  const handleMaximizeNotepad = () => {
    const element = document.getElementById("notepad");
    element.classList.toggle("window--max");
  };

  return (
    <main className="w-full h-full z-0 p-8 text-white relative">
      <div className="w-full h-full flex flex-col justify-start items-start gap-12">
        <Draggable>
          <div>
            <ProgramIcon
              icon={ComputerIcon}
              label="My Computer"
              onDoubleClick={handleMyComputer}
            />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <ProgramIcon icon={RecycleIcon} label="Recycle Bin" />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <ProgramIcon icon={NetworkIcon} label="Network Neighbourhood" />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <ProgramIcon icon={PrinterIcon} label="Printers &amp; Devices" />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <ProgramIcon
              icon={NotepadIcon}
              label="Notepad"
              onDoubleClick={handleNotepad}
            />
          </div>
        </Draggable>
      </div>

      {myComputer && (
        <DraggableCore>
          <div>
            <MyComputer
              onClose={handleMyComputer}
              onMaximize={handleMaximizeMyComputer}
            />
          </div>
        </DraggableCore>
      )}

      {notepad && (
        <DraggableCore>
          <div>
            <Notepad
              onClose={handleNotepad}
              onMaximize={handleMaximizeNotepad}
            />
          </div>
        </DraggableCore>
      )}
    </main>
  );
}

export default Desktop;
