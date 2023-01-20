import { Button } from "@material-tailwind/react";
import getUserInfo from "../services/getUserInfo";
import CardPersoInfo from "../components/account/personal/CardPersoInfo";
import UserAvatar from "../components/account/avatar/UserAvatar";
import CardPassword from "../components/account/password/CardPassword";
import CardDeleteZone from "../components/account/danger-zone/CardDeleteZone";

const Account = () => {
  const user = getUserInfo();
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900">Account</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <div className="grid h-96 grid-cols-3 gap-10">
            {/* Profile picture */}
            <UserAvatar avatar={user?.avatar} />
            <div className="col-span-2 space-y-10">
              <CardPersoInfo />
              <CardPassword />
              <CardDeleteZone />
            </div>
          </div>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};

export default Account;
