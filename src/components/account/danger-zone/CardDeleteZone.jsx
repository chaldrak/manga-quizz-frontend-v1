import getUserInfo from "../../../services/getUserInfo";
import { useState } from "react";
import ButtonRefreshData from "./ButtonRefreshData";
import ButtonDeleteAccount from "./ButtonDeleteAccount";

const CardDeleteZone = () => {
  const user = getUserInfo();
  const [edit, setEdit] = useState(false);
  return (
    <div className="h-fit w-full overflow-hidden rounded-md border border-red-900">
      <div className="flex h-10 w-full items-center border-b bg-red-900 px-5">
        <h3 className="text-lg">Danger zone</h3>
      </div>
      <div className="w-full p-5 text-black">
        <ButtonRefreshData />
        <ButtonDeleteAccount />
      </div>
    </div>
  );
};

export default CardDeleteZone;
