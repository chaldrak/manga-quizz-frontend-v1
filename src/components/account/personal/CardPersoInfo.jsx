import { PencilSquareIcon } from "@heroicons/react/24/outline";
import getUserInfo from "../../../services/getUserInfo";
import { useState } from "react";
import InputPersoInfo from "./InputPersoInfo";
import PersoInfo from "./PersoInfo";

const CardPersoInfo = () => {
  const user = getUserInfo();
  const [edit, setEdit] = useState(false);
  return (
    <div className="h-fit w-full overflow-hidden rounded-md border border-[#101529]">
      <div className="flex h-10 w-full items-center border-b bg-[#101529] px-5">
        <h3 className="text-lg">Personal Information</h3>
      </div>
      <div className="w-full p-5 text-black">
        <PersoInfo username={user?.username} edit={edit} setEdit={setEdit} />
        <InputPersoInfo
          username={user?.username}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
};

export default CardPersoInfo;
