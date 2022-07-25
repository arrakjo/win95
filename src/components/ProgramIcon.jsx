function ProgramIcon({ icon, label, onDoubleClick }) {
  return (
    <button className="w-32 leading-none flex flex-col gap-3 justify-between items-center text-center cursor-default">
      <img src={icon} alt={label} className="h-16" />
      {label}
    </button>
  );
}

export default ProgramIcon;
