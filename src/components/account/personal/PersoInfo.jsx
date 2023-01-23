import { PencilSquareIcon } from "@heroicons/react/24/outline";
import useUser from "../../../hooks/useUser";

const PersoInfo = ({ setEdit, edit }) => {
  const { user } = useUser();
  return (
    <div className={`flex h-8 items-center space-x-2 ${edit && "hidden"}`}>
      <p className="text-lg font-bold">Username : </p>
      <p>{user?.username}</p>
      <button onClick={() => setEdit((c) => !c)}>
        <PencilSquareIcon className="w-6 text-light-blue-600 hover:text-black" />
      </button>
    </div>
  );
};

export default PersoInfo;
