import { useState } from "react";

const InputPassword = () => {
  const [name, setName] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
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
              value={name}
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
              value={name}
              className="h-full border border-[#101529] px-3 focus:ring-0"
              onChange={handleInput}
            />
          </td>
        </tr>
        <tr>
          <th></th>
          <td className="h-11">
            <button className="h-full bg-[#101529] px-2 text-white">
              SAVE
            </button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default InputPassword;
