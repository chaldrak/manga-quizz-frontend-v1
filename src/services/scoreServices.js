import getUserInfo from "./getUserInfo";

const api_url = "http://localhost:8080/api";

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

export {reset, getScores};