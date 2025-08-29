import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  title,
  handleClick,
  styles,
}) => {
  return (
    <button
      className={`button-${styles}`}
      style={{
        padding: "15px 20px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#0071d4",
        color: "white",
        cursor: "pointer",
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
