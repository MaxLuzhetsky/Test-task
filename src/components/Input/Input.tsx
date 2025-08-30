import { InputProps } from "../../types";

const Input: React.FC<InputProps> = ({ type, handleChange, placeholder }) => {
  return (
    <input
      className="text-input"
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
};
export default Input;
