import { Fragment } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import useAuth from "../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { removeItem } from "../services/localStorage";
import getUserInfo from "../services/getUserInfo";

const UserIcon = ({ placement, variant }) => {
  const { setAuth } = useAuth();
  const user = getUserInfo();
  const navigate = useNavigate();
  const logout = () => {
    removeItem();
    navigate("/signin");
    setAuth({});
  };
  return (
    <div
      className={`items-center space-x-2 ${
        variant === "mobile" ? "flex lg:hidden" : "hidden lg:flex"
      }`}
    >
      <Menu placement={placement}>
        <MenuHandler>
          <Avatar
            src={user?.avatar}
            alt="avatar"
            variant="circular"
            size="sm"
            className="cursor-pointer"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/account">Account</NavLink>
          </MenuItem>
          <Button
            color="red"
            variant="gradient"
            size="sm"
            fullWidth
            className="mt-2"
            onClick={logout}
          >
            Logout
          </Button>
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserIcon;
