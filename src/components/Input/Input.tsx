import { InputProps } from "../../types";

const Input: React.FC<InputProps> = ({
  type,
  handleChange,
  placeholder,
  value,
}) => {
  return <input style={{padding:'15px 20px', borderRadius:'15px', border:'1px solid #55bdb1'}} type={type} placeholder={placeholder} onChange={(e)=>{handleChange(e)}}/>;
};
export default Input;
