import { useState } from "react";
import StatsCard from "../StatsCard";
import { useEffect } from "react";
import { getTotalScores } from "../../services/scoreServices";
import useAuth from "../../hooks/useAuth";
import getUserInfo from "../../services/getUserInfo";

export default function StatsUser({ scores }) {
  const { auth, setAuth } = useAuth();
  const [totalPlay, setTotalPlay] = useState({
    name: "Total Play",
    stat: scores?.length,
  });
  const [totalScore, setTotalScore] = useState({
    name: "Total Score",
    stat: 0,
  });
  const [totalRank, setTotalRank] = useState({
    name: "Total Rank",
    stat: "#",
  });
  useEffect(() => {
    getTotalScore();
  }, []);

  const getTotalScore = async () => {
    const response = await getTotalScores(auth?.token);
    if (response?.error) {
      console.log(response?.error);
    }
    const totalScore = response?.scores?.filter(
      (s) => s.user_id === getUserInfo()?.id
    );
    setTotalScore({
      name: "Total Score",
      stat: totalScore[0]?.total || 0,
    });
    const totalRank = response?.scores?.indexOf(totalScore[0]) + 1 || "";
    setTotalRank({
      name: "Total Rank",
      stat: "#" + totalRank,
    });
  };
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <StatsCard {...totalPlay} />
        <StatsCard {...totalScore} />
        <StatsCard {...totalRank} />
      </dl>
    </div>
  );
}
