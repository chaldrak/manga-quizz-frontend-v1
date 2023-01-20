import { PencilSquareIcon } from "@heroicons/react/24/outline";

const PersoInfo = ({ username, setEdit, edit }) => {
  return (
    <div className={`flex items-center space-x-2 ${edit && "hidden"}`}>
      <p className="text-lg font-bold">Username : </p>
      <p>{username}</p>
      <button onClick={() => setEdit((c) => !c)}>
        <PencilSquareIcon className="w-6 text-light-blue-600 hover:text-black" />
      </button>
    </div>
  );
};

export default PersoInfo;
