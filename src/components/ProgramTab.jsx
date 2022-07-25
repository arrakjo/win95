function ProgramTab({ icon, label, onClick }) {
  return (
    <button className="pl-2 pr-4 mr-2 w-64 h-12 btn flex items-center">
      <img src={icon} alt={label} className="h-8 mr-3" />
      {label}
    </button>
  );
}

export default ProgramTab;
