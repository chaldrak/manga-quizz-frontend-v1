import { StopCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { updatePassword } from "../../../services/userServices";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputPassword = () => {
  const notify = () => {
    toast.success("Password changed successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };
  const { auth } = useAuth();
  const [form, setForm] = useState({
    password: "",
    password1: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    const formData = {
      ...form,
      [name]: value,
    };
    setForm(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await updatePassword(
      {
        password: form.password,
        confirmPass: form.password1,
      },
      auth?.token
    );
    if (response?.error) {
      setError(response?.error);
      return setIsLoading(false);
    }
    setError("");
    setForm({
      password: "",
      password1: "",
    });
    setIsLoading(false);
    notify();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <table className="">
          <tr className="">
            <th className="text-right">New :</th>
            <td className="h-11">
              <input
                type="password"
                name="password"
                placeholder="Your New Password"
                value={form.password}
                className="h-full border border-[#101529] px-3 focus:ring-0"
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr className="">
            <th>Again :</th>
            <td className="h-11">
              <input
                type="password"
                name="password1"
                placeholder="Repeat Your Password"
                value={form.password1}
                className="h-full border border-[#101529] px-3 focus:ring-0"
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td className="h-11">
              <div className="flex h-full items-center">
                <button
                  disabled={isLoading}
                  className="flex h-full items-center bg-[#101529] px-3 text-white"
                >
                  <BiLoaderAlt
                    size={20}
                    className={`mr-2 animate-spin ${!isLoading && "hidden"}`}
                  />
                  <p>{isLoading ? "Loading..." : "SAVE"}</p>
                </button>
                <small
                  className={`ml-2 italic text-red-600 ${!error && "hidden"}`}
                >
                  ⚠ {error}
                </small>
              </div>
            </td>
          </tr>
        </table>
      </form>
      <ToastContainer />
    </>
  );
};

export default InputPassword;
