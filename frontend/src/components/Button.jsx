import { twMerge } from "tailwind-merge";

function Button({
  content,
  onClick,
  isActive = false,
  disabled = false,
  className = "",
}) {
  return (
    <button
      className={twMerge(
        `px-3 py-2 transition border rounded-md bg-black text-white hover:bg-white hover:text-black cursor-pointer hover:border-black hover:border ${
          !disabled && !isActive ? "hover:scale-100" : ""
        }`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
