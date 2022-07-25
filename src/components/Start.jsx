import ShutDownIcon from "../assets/icons/ShutDown.svg";
import RunIcon from "../assets/icons/Run.svg";
import HelpIcon from "../assets/icons/Help.svg";
import FindIcon from "../assets/icons/Find.svg";
import SettingsIcon from "../assets/icons/Settings.svg";
import DocumentsIcon from "../assets/icons/Documents.svg";
import ProgramsIcon from "../assets/icons/Programs.svg";
import StartButton from "./StartButton";
import StartButtonAlt from "./StartButtonAlt";

function Start() {
  return (
    <div className="w-80 flex flex-col-reverse h-max start fixed bottom-[61px] left-0 bg-grey-100">
      <StartButtonAlt icon={ShutDownIcon} label="Shut Down" />
      <div className="w-[314px] h-[2px] mx-auto bg-grey-300"></div>
      <StartButton icon={RunIcon} label="Run" />
      <StartButton icon={HelpIcon} label="Help" />
      <StartButton icon={FindIcon} label="Find" />
      <StartButton icon={SettingsIcon} label="Settings" />
      <StartButton icon={DocumentsIcon} label="Documents" />
      <StartButton icon={ProgramsIcon} label="Programs" />
    </div>
  );
}

export default Start;
