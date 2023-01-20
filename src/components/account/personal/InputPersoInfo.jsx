import { useState } from "react";

const InputPersoInfo = ({ username, edit, setEdit }) => {
  const [name, setName] = useState(username);
  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
    setEdit(false);
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
      </form>
    </div>
  );
};

export default InputPersoInfo;
