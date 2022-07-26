import { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import ProgramIcon from "./ProgramIcon";

// Icons
import ComputerIcon from "../assets/icons/Computer.svg";
import RecycleIcon from "../assets/icons/Recycle.svg";
import NetworkIcon from "../assets/icons/Network.svg";
import PrinterIcon from "../assets/icons/Printer.svg";
import CloseIcon from "../assets/icons/Close.svg";
import MyComputer from "./windows/MyComputer";

function Desktop() {
  const [myComputer, setMyComputer] = useState(false);

  const handleOpenMyComputer = () => {
    setMyComputer(!myComputer);
  };

  const handleMaximizeMyComputer = () => {
    const computer = document.getElementById("mycomputer");
    computer.classList.toggle("window--max");
  };

  return (
    <main className="w-full h-full z-0 p-8 text-white relative">
      <div className="w-full h-full flex flex-col justify-start items-start gap-14">
        <Draggable>
          <div>
            <ProgramIcon
              icon={ComputerIcon}
              label="My Computer"
              onDoubleClick={handleOpenMyComputer}
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
      </div>

      {myComputer && (
        <DraggableCore>
          <div>
            <MyComputer
              onClose={handleOpenMyComputer}
              onMaximize={handleMaximizeMyComputer}
            />
          </div>
        </DraggableCore>
      )}
    </main>
  );
}

export default Desktop;
