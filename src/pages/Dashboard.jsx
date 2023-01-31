import React, { useEffect } from "react";
import DashTabs from "../components/dashboard/DashTabs";
import RecentActivities from "../components/dashboard/RecentActivities";
import StatsUser from "../components/dashboard/StatsUser";
import { getUserScores, getUserScoresByTotal } from "../services/scoreServices";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { auth, setAuth } = useAuth();
  const [scores, setScores] = useState([]);
  const [scoresByTotal, setScoresByTotal] = useState([]);
  const getUserScoresByDate = async () => {
    const response = await getUserScores(auth?.token);
    if (response?.error) {
      console.log(response?.error);
    }
    setScores(response?.scores);
  };
  const getUserScoresByScore = async () => {
    const response = await getUserScoresByTotal(auth?.token);
    if (response?.error) {
      console.log(response?.error);
    }
    setScoresByTotal(response?.scores);
  };
  useEffect(() => {
    getUserScoresByDate();
    getUserScoresByScore();
  }, []);
  return (
    <div className="py-6 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl font-semibold text-gray-900">Dashboard</h1>
        <hr />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <h3 className="mb-10 text-xl font-semibold text-gray-900">
            🌟 Statistics
          </h3>
          <StatsUser />

          <h3 className="my-10 text-xl font-semibold text-gray-900">
            🌟 Recent activities
          </h3>
          <RecentActivities scores={scores} />

          <h3 className="my-10 text-xl font-semibold text-gray-900">
            🌟 My Scores
          </h3>
          <DashTabs scores={scoresByTotal} />
          <Footer />
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};

export default Dashboard;
