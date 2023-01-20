import { TrashIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

const ButtonRefreshData = () => {
  return (
    <div className="flex items-center space-x-5 border-b">
      <button className="flex items-center rounded-md bg-red-900 py-2 px-5 text-white hover:bg-red-600">
        <PlayCircleIcon className="mr-1 w-6" />
        Refresh
      </button>
      <p className="text-gray-600">Reset the score counter to 0.</p>
    </div>
  );
};

export default ButtonRefreshData;
