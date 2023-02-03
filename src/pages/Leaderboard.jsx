import React, { useEffect, useState } from "react";
import DashTabs from "../components/dashboard/DashTabs";
import useAuth from "../hooks/useAuth";
import { getScoresByTotal } from "../services/scoreServices";
import Footer from "../components/Footer";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    listScores();
  }, []);

  const listScores = async () => {
    const response = await getScoresByTotal(auth?.token);
    if (response?.error) {
      console.log(response?.error);
    }
    setScores(response?.scores);
  };
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900">Leaderboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <DashTabs scores={scores} />
          <Footer />
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};

export default Leaderboard;
