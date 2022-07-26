function WindowTopButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 btn bg-grey-100 flex justify-between items-center"
    >
      <img src={icon} alt="" className="h-4 mr-px" />
    </button>
  );
}

export default WindowTopButton;
