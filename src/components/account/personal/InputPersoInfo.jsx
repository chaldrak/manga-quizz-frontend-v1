import { useState } from "react";
import useUser from "../../../hooks/useUser";
import { updateInfo } from "../../../services/userServices";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

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
      setError(response?.error);
      return setIsLoading(false);
    }
    setError("");
    setName(response?.user?.username);
    setIsLoading(false);
    setEdit(false);
  };
  const onCancel = (e) => {
    alert("Cnacel");
  };
  return (
    <div className={`flex items-center space-x-2 ${!edit && "hidden"}`}>
      <p className="text-lg font-bold">Username : </p>
      <form className="h-8 space-x-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={name}
          className="h-full border border-[#101529] px-3 focus:ring-0"
          onChange={handleInput}
        />
        <button className="h-full bg-[#101529] px-2 text-white">SAVE</button>
        <button
          className="h-full border border-[#101529] px-2 text-[#101529]"
          onClick={onCancel}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
};

export default InputPersoInfo;
