import { useState, useEffect } from "react";
import SoundIcon from "../assets/icons/Sound.svg";

function Clock() {
  const [time, setTime] = useState("13:37 PM");

  useEffect(() => {
    // Running side-effect when component mounted (componentDidMount)
    const myInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 5000);

    // Clear side-effect when component unmount (componentWillUnmount)
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-3 min-w-[124px] clock">
      <img src={SoundIcon} alt="Sound" className="h-6 mr-2" />
      <p className="cursor-default">{time}</p>
    </div>
  );
}

export default Clock;
