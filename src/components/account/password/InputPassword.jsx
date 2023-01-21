import { StopCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const InputPassword = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert();
  };
  return (
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
            <small className={`ml-2 italic text-red-600 ${!error && "hidden"}`}>
              ⚠ wrong password
            </small>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default InputPassword;
