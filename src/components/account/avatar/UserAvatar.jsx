import { CameraIcon } from "@heroicons/react/24/outline";
import React from "react";
import useUser from "../../../hooks/useUser";
import { useRef } from "react";
import { resizeImage, uploadFile } from "../../../services/uploadFile";
import { updateProfilePic } from "../../../services/userServices";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const UserAvatar = () => {
  const notify = () => {
    toast.error("Operation Failed !", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
    border;
  };
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useUser();
  const { auth } = useAuth();
  const input = useRef(null);
  const onClickInput = () => {
    input.current.click();
  };
  const onInputChange = (e) => {
    if (e.target.files.length > 0) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      const newFile = new File([file], user?.username, { type: file.type });
      console.log(newFile);
      changeProfile(newFile);
    }
  };
  const changeProfile = (image) => {
    if (imageIsValid(image)) {
      uploadPic(image);
    } else {
      notify();
    }
  };
  const imageIsValid = (image) => {
    const type = image.type;
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];
    return validExtensions.includes(type);
  };
  const uploadPic = async (image) => {
    setIsLoading(true);
    const response = await uploadFile(image);
    console.log(response);
    if (response?.url) {
      const url = resizeImage(response?.url);
      setUser({
        username: user?.username,
        avatar: url,
      });
      const res = await updateProfilePic({ avatar: url }, auth?.token);
      if (res?.error) {
        console.log(error);
        notify();
        return setIsLoading(true);
      }
    }
    setIsLoading(false);
  };
  return (
    <div className="h-80 text-center">
      <div className="relative">
        <ToastContainer />
        <img
          src={user?.avatar}
          alt="profile-picture"
          className="h-full w-full rounded-xl object-cover"
        />
        <div
          className={`absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-xl bg-black opacity-50 ${
            !isLoading && "hidden"
          }`}
        >
          <BiLoaderAlt size={50} className="mr-2 animate-spin" />
        </div>
      </div>
      <input type="file" hidden ref={input} onChange={onInputChange} />
      <button
        disabled={isLoading}
        className="group mt-5 h-10 rounded-lg bg-[#101529] px-5"
        onClick={onClickInput}
      >
        {isLoading ? (
          <p className="animate-pulse">Uploading...</p>
        ) : (
          <CameraIcon className="w-8 text-gray-100 group-hover:text-white" />
        )}
      </button>
    </div>
  );
};

export default UserAvatar;
