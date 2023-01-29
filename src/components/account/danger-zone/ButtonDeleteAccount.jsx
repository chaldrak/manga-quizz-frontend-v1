import { TrashIcon } from "@heroicons/react/24/outline";
import BaseModal from "../../BaseModal";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { deleteAccount } from "../../../services/userServices";
import getUserInfo from "../../../services/getUserInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeItem } from "../../../services/localStorage";
import { useNavigate } from "react-router-dom";

const modal = {
  title: "Delete account",
  description:
    "You are about to delete your account. Your activity cannot be recovered after deleting your account.",
};

const ButtonDeleteAccount = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const { auth, setAuth } = useAuth();

  const notify = () => {
    toast.error("Operation failed ! Username incorrect", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  const deleteUser = async () => {
    setOpen(false);
    const user = getUserInfo();
    if (username === user?.username) {
      const response = await deleteAccount(auth?.token);
      if (response?.error) {
        console.log(response?.error);
      }
      setAuth({});
      removeItem();
      navigate("/signup", { replace: true });
    } else {
      notify();
      setUsername("");
    }
  };

  const handleInput = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="flex items-center space-x-5 pt-5">
      <div className="w-32 text-center">
        <BaseModal
          onClick={deleteUser}
          {...modal}
          open={open}
          setOpen={setOpen}
          username={username}
          setUsername={setUsername}
          onChange={handleInput}
        >
          <TrashIcon className="mr-1 w-6" />
          Delete
        </BaseModal>
      </div>
      <p className="text-gray-600">
        Warning: Your activity cannot be recovered after deleting your account.
      </p>
      <ToastContainer />
    </div>
  );
};

export default ButtonDeleteAccount;
