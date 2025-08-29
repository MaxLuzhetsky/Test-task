import { useDispatch } from "react-redux";

import { logout } from "../../store/authSlice";
import type { AppDispatch } from "../../store";
import Button from "../Button/Button";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#0071d4",
        color: "white",
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ display: "inline", marginRight: "20px" }}>Courses</h2>
      <Button
        title="Log out"
        styles="borderless"
        handleClick={() => dispatch(logout())}
      ></Button>
    </div>
  );
};

export default Header;
