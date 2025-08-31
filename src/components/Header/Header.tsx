import { useDispatch } from "react-redux";

import { logout } from "../../store/authSlice";
import type { AppDispatch } from "../../store";
import Button from "../Button/Button";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="header">
      <h2 className="header__title">🎓Learning Hub</h2>
      <Button
        title="Log out"
        styles="secondary"
        handleClick={() => dispatch(logout())}
      />
    </div>
  );
};

export default Header;
