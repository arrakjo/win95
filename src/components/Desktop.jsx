import ProgramIcon from "./ProgramIcon";

// Icons
import ComputerIcon from "../assets/icons/Computer.svg";
import RecycleIcon from "../assets/icons/Recycle.svg";
import NetworkIcon from "../assets/icons/Network.svg";
import PrinterIcon from "../assets/icons/Printer.svg";

function Desktop() {
  return (
    <main className="w-full h-full z-0 p-8 text-white">
      <div className="w-full h-full flex flex-col justify-start items-start gap-14">
        <ProgramIcon icon={ComputerIcon} label="My Computer" />
        <ProgramIcon icon={RecycleIcon} label="Recycle Bin" />
        <ProgramIcon icon={NetworkIcon} label="Network Neighbourhood" />
        <ProgramIcon icon={PrinterIcon} label="Printers &amp; Devices" />
      </div>
    </main>
  );
}

export default Desktop;
