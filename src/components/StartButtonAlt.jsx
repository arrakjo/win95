function StartButtonAlt({ icon, label, onClick }) {
  return (
    <button className="pl-6 pr-4 mr-2 w-full h-[72px] border-t-[1px] border-t-white flex items-center hover:bg-blue-100 hover:text-white">
      <img src={icon} alt={label} className="h-14 mr-5" />
      <p className="first-letter:underline">{label}</p>
    </button>
  );
}

export default StartButtonAlt;
