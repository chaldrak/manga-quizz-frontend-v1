import { useState } from "react";
import useUser from "../../../hooks/useUser";
import { updateInfo } from "../../../services/userServices";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const InputPersoInfo = ({ edit, setEdit }) => {
  const { user, setUser } = useUser();
  const { auth } = useAuth();
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setName(user?.username);
  }, []);
  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await updateInfo(
      {
        username: name,
      },
      auth?.token
    );
    setUser({
      username: user?.username,
      avatar: user?.avatar,
    });
    if (response?.error) {
      response?.error.includes("contrainte unique")
        ? setError("Username already taken")
        : setError(response?.error);
      return setIsLoading(false);
    }
    setError("");
    setName(response?.user?.username);
    setIsLoading(false);
    setEdit(false);
  };
  const onCancel = (e) => {
    setError("");
    setName(user?.username);
    setEdit(false);
  };
  return (
    <div className={`flex items-center space-x-2 ${!edit && "hidden"}`}>
      <p className="text-lg font-bold">Username : </p>
      <form
        className="relative flex h-8 items-center space-x-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          value={name}
          className="h-full border border-[#101529] px-3 focus:ring-0"
          onChange={handleInput}
        />
        <button
          disabled={isLoading}
          type="submit"
          className={`flex h-full items-center px-2 text-white ${
            isLoading ? "bg-gray-800" : "bg-[#101529]"
          }`}
        >
          <BiLoaderAlt
            size={20}
            className={`mr-2 animate-spin ${!isLoading && "hidden"}`}
          />
          <p>{isLoading ? "Loading..." : "SAVE"}</p>
        </button>
        <button
          type="reset"
          className="h-full border border-[#101529] px-2 text-[#101529]"
          onClick={onCancel}
        >
          CANCEL
        </button>
        <small
          className={`absolute -bottom-5 italic text-red-600 ${
            !error && "hidden"
          }`}
        >
          ⚠ {error}
        </small>
      </form>
    </div>
  );
};

export default InputPersoInfo;
