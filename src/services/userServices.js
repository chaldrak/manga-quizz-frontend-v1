import getUserInfo from "./getUserInfo";

const api_url = "http://localhost:8080/api/users";

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

export {updatePassword};