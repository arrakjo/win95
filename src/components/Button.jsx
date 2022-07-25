function Button({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="pl-2 pr-6 h-12 btn flex justify-between items-center"
    >
      <img src={icon} alt={label} className="h-8 mr-3" />
      {label}
    </button>
  );
}

export default Button;
