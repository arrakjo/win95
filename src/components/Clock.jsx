import SoundIcon from "../assets/icons/Sound.svg";

function Clock() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex justify-between items-center p-3 w-[137px] clock">
      <img src={SoundIcon} alt="Sound" className="h-6 mr-2" />
      <p>{currentTime}</p>
    </div>
  );
}

export default Clock;
