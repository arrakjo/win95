function StartButton({ icon, label, onClick }) {
  return (
    <button className="pl-6 pr-4 mr-2 w-full h-[72px] flex items-center hover:bg-blue-100 hover:text-white">
      <img src={icon} alt={label} className="h-14 mr-5" />
      {label}
    </button>
  );
}

export default StartButton;
