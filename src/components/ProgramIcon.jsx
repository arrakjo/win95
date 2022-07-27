function ProgramIcon({ icon, label, onDoubleClick }) {
  return (
    <button
      onDoubleClick={onDoubleClick}
      className="w-32 z-0 leading-none flex flex-col gap-3 justify-between items-center text-center cursor-default select-none"
    >
      <img src={icon} alt={label} className="h-14 select-none" />
      {label}
    </button>
  );
}

export default ProgramIcon;
