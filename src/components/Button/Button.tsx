import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({ title, handleClick, styles }) => {
  return (
    <button
      className={`button-${styles}`}
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
