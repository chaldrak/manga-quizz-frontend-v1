import React from "react";
import useAuth from "../hooks/useAuth";
import { Button } from "@material-tailwind/react";
import { removeItem } from "../services/localStorage";
import { useNavigate } from "react-router-dom";

const GlobalNav = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const logout = () => {
    removeItem();
    navigate("/signin");
    setAuth({});
  };
  if (auth?.token)
    return (
      <div className="flex items-center justify-between p-2">
        <p>GlobalNav</p>
        <Button color="red" size="sm" onClick={logout}>
          Logout
        </Button>
      </div>
    );
};

export default GlobalNav;
