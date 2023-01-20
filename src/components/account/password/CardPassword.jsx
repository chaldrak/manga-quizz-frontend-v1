import getUserInfo from "../../../services/getUserInfo";
import { useState } from "react";
import InputPassword from "./InputPassword";

const CardPassword = () => {
  const user = getUserInfo();
  const [edit, setEdit] = useState(false);
  return (
    <div className="h-fit w-full overflow-hidden rounded-md border border-[#101529]">
      <div className="flex h-10 w-full items-center border-b bg-[#101529] px-5">
        <h3 className="text-lg">Change your password</h3>
      </div>
      <div className="w-full p-5 text-black">
        <InputPassword />
      </div>
    </div>
  );
};

export default CardPassword;
