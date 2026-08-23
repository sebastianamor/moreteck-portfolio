import "./Button.css";

function Button({
  children,
  secondary = false,
  onClick
}) {

  return (
    <button
      className={
        secondary
          ? "mt-button secondary"
          : "mt-button"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );

}

export default Button;