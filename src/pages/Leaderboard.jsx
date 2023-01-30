import React from "react";
import DashTabs from "../components/dashboard/DashTabs";

const Leaderboard = () => {
  return (
    <div className="py-6 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900">Leaderboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <DashTabs />
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};

export default Leaderboard;
