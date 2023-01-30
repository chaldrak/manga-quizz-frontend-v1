import React from "react";
import DashTabs from "../components/dashboard/DashTabs";
import RecentActivities from "../components/dashboard/RecentActivities";
import StatsUser from "../components/dashboard/StatsUser";

const Dashboard = () => {
  return (
    <div className="py-6 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl font-semibold text-gray-900">Dashboard</h1>
        <hr />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            🌟 Statistiques
          </h3>
          <StatsUser />

          <h3 className="my-5 text-xl font-semibold text-gray-900">
            🌟 Recent activities
          </h3>
          <RecentActivities />

          <h3 className="my-5 text-xl font-semibold text-gray-900">
            🌟 My Scores
          </h3>
          <DashTabs />
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};

export default Dashboard;
