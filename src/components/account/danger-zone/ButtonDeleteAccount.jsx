import { TrashIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

const ButtonDeleteAccount = () => {
  return (
    <div className="flex items-center space-x-5 pt-5">
      <div className="w-32 text-center">
        <button className="flex w-full items-center justify-center rounded-md bg-red-900 py-2 text-center text-white hover:bg-red-600">
          <TrashIcon className="mr-1 w-6" />
          Delete
        </button>
      </div>
      <p className="text-gray-600">
        Warning: Your activity cannot be recovered after deleting your account.
      </p>
    </div>
  );
};

export default ButtonDeleteAccount;
