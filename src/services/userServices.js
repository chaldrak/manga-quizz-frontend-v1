import getUserInfo from "./getUserInfo";

const api_url = "https://manga-quizz-api-v1.onrender.com/api/users";

const updatePassword = async (credentials, token) => {
    const id = getUserInfo()?.id;
    const response = await fetch(`${api_url}/${id}/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(credentials),
    });
    return await response.json();
};

const updateInfo = async (credentials, token) => {
  const id = getUserInfo()?.id;
  const response = await fetch(`${api_url}/${id}/info`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(credentials),
  });
  return await response.json();
};

const updateProfilePic = async (credentials, token) => {
  const id = getUserInfo()?.id;
  const response = await fetch(`${api_url}/${id}/avatar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(credentials),
  });
  return await response.json();
};

const getUser = async (token) => {
    const id = getUserInfo()?.id;
    const response = await fetch(`${api_url}/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
    });
    return await response.json();
};

const deleteAccount = async (token) => {
  const id = getUserInfo()?.id;
  const response = await fetch(`${api_url}/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

export {updatePassword, getUser, updateInfo, updateProfilePic, deleteAccount};