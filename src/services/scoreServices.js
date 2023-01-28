import getUserInfo from "./getUserInfo";

const api_url = "http://localhost:8080/api/users";

const reset = async (token) => {
    const id = getUserInfo()?.id;
    const response = await fetch(`${api_url}/${id}/scores`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
    });
    return await response.json();
  };

  export {reset};