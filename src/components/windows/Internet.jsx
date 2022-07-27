import { useRef, useState } from "react";
import WindowTopButton from "../WindowTopButton";
import InternetIcon from "../../assets/icons/Internet.png";
import MaximizeIcon from "../../assets/icons/Maximize.svg";
import MinimizeIcon from "../../assets/icons/Minimize.svg";
import CloseIcon from "../../assets/icons/Close.svg";

function Internet({ onClose, onMaximize }) {
  const [url, setUrl] = useState("bing.com");
  const [submittedUrl, setSubmittedUrl] = useState("bing.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUrl(url);
  };

  return (
    <div
      id="internet"
      className="window absolute flex flex-col w-[730px] h-[500px] min-w-[545px] min-h-[500px] top-[20%] left-[30%] p-1 resize overflow-auto"
    >
      <div className="w-full h-11 bg-blue-200 flex justify-between">
        <div className="h-full flex items-center px-2 space-x-2 select-none">
          <img src={InternetIcon} alt="Notepad" className="h-7 select-none" />
          <p className="text-xl truncate">Internet</p>
        </div>
        <div className="h-full flex items-center px-2 space-x-2 select-none">
          <WindowTopButton icon={MinimizeIcon} onClick={onClose} />
          <WindowTopButton icon={MaximizeIcon} onClick={onMaximize} />
          <WindowTopButton icon={CloseIcon} onClick={onClose} />
        </div>
      </div>

      <div className="w-full h-12 bg-grey-100 text-black flex items-center space-x-7 px-5 select-none">
        <form
          type="submit"
          onSubmit={handleSubmit}
          className="w-full flex space-x-3 items-center"
        >
          <label htmlFor="url">Address:</label>
          <input
            type="text"
            name="url"
            placeholder="www.bing.com"
            onChange={(e) => setUrl(e.target.value)}
            className="address w-full outline-none px-2"
          />
          <button className="btn w-8 px-2 flex justify-center items-center">
            Go
          </button>
        </form>
      </div>

      <div className="window__inner w-full h-full">
        <iframe
          title="Explore"
          src={`https://${submittedUrl}`}
          className="w-full h-full p-1"
        ></iframe>
      </div>
    </div>
  );
}

export default Internet;
