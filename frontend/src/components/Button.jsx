function Button({ content, onClick, isActive = false, disabled = false }) {
  let bgColor;
  if (disabled) {
    bgColor = "#A0A0A0"; // Gray if disabled
  } else if (isActive) {
    bgColor = "#3A8BC9"; // Darker dark blue if active
  } else {
    bgColor = "#12BEF0"; // Default blue
  }

  return (
    <button
      className={`m-2 px-3 py-1 text-white font-bold rounded-md transition w-fit
        ${!disabled && !isActive ? "hover:bg-[#0ea5e9] hover:scale-105" : ""}
      `}
      style={{
        backgroundColor: bgColor,
        cursor: disabled ? "not-allowed" : "pointer",
        border: "none",
        transition: "background-color 0.2s, transform 0.2s"
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
