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
import { useNavigate } from "react-router-dom";
import { removeItem } from "../services/localStorage";
const UserLogoDefault =
  "https://res.cloudinary.com/dumxkdcvd/image/upload/v1673972861/uwp2202806_mu3vgh.jpg";

const UserIcon = ({ placement, variant }) => {
  const { setAuth } = useAuth();
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
            src={UserLogoDefault}
            alt="avatar"
            variant="circular"
            size="sm"
            className="cursor-pointer"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Account</MenuItem>
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
