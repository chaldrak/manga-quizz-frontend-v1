import { PlayCircleIcon } from "@heroicons/react/24/outline";
import BaseModal from "../../BaseModal";
import { useState } from "react";
import { reset } from "../../../services/scoreServices";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const modal = {
  title: "Reset scores",
  description:
    "You are about to reset your score. This action is irreversible and your entire backup will be deleted.",
};

const ButtonRefreshData = () => {
  const [open, setOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const notify = () => {
    toast.success("Scores reset successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };
  const refresh = async () => {
    setOpen(false);
    const response = await reset(auth?.token);
    if (response?.error) {
      console.log(response?.error);
    }
    notify();
  };
  return (
    <div className="flex items-center space-x-5 border-b pb-5">
      <div className="w-32 text-center">
        <BaseModal onClick={refresh} {...modal} open={open} setOpen={setOpen}>
          <PlayCircleIcon className="mr-1 w-6" />
          Refresh
        </BaseModal>
      </div>
      <p className="text-gray-600">Reset the score counter to 0.</p>
      <ToastContainer />
    </div>
  );
};

export default ButtonRefreshData;
