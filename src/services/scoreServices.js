import getUserInfo from "./getUserInfo";

const api_url = "https://manga-quizz-api-v1.onrender.com/api";

const reset = async (token) => {
    const id = getUserInfo()?.id;
    const response = await fetch(`${api_url}/users/${id}/scores`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
    });
    return await response.json();
};

const getScores = async (token) => {
  const response = await fetch(`${api_url}/scores`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

const getScoresByTotal = async (token) => {
  const response = await fetch(`${api_url}/scores/orderbyscore`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

const getUserScores = async (token) => {
  const id = getUserInfo()?.id;
  const response = await fetch(`${api_url}/users/${id}/scores`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

const getUserScoresByTotal = async (token) => {
  const id = getUserInfo()?.id;
  const response = await fetch(`${api_url}/users/${id}/scores/orderbyscore`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

const getTotalScores = async (token) => {
  const response = await fetch(`${api_url}/scores/total`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

export {reset, getScores, getUserScores, getUserScoresByTotal, getTotalScores, getScoresByTotal};