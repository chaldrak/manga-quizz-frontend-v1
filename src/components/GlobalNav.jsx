import React from "react";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import UserIcon from "./UserIcon";

const menu = [
  {
    name: "Pages",
    path: "/pages",
  },
  {
    name: "Account",
    path: "/account",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
  },
];

const GlobalNav = () => {
  const { auth } = useAuth();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menu.map((item, index) => (
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold hover:text-yellow-900"
          key={index}
        >
          <NavLink to={item.path} className="flex items-center">
            {item.name}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
  if (auth?.token)
    return (
      <Navbar className="max-w-screen-7xl mx-auto w-full rounded-none py-2 px-4 lg:px-8">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <NavLink to="/">
              <img
                src="https://res.cloudinary.com/dumxkdcvd/image/upload/v1673437258/9f008cbb44537ec3910105d779c54b49_soswu2.png"
                alt="logo manga quizz"
                className="h-7"
              />
            </NavLink>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <UserIcon placement="bottom-end" variant="desktop" />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <UserIcon placement="top-start" variant="mobile" />
        </MobileNav>
      </Navbar>
    );
};

export default GlobalNav;
