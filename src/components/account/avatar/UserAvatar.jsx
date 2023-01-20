import { CameraIcon } from "@heroicons/react/24/outline";
import React from "react";

const UserAvatar = ({ avatar }) => {
  return (
    <div className="h-80 text-center">
      <img
        src={avatar}
        alt="profile-picture"
        className="h-full w-full rounded-xl object-cover"
      />
      <button className="group mt-5 rounded-lg bg-[#101529] py-0.5 px-5">
        <CameraIcon className="w-8 animate-pulse group-hover:animate-none" />
      </button>
    </div>
  );
};

export default UserAvatar;
