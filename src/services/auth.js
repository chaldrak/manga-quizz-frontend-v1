const api_url = "http://localhost:8080/api";

const login = async (credentials) => {
    const response = await fetch(`${api_url}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return await response.json();
};

const register = async (credentials) => {
    const response = await fetch(`${api_url}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return await response.json();
};

const getUser = async (id, token) => {
  const response = await fetch(`${api_url}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

export {login, register, getUser};