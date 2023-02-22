const api_url = "https://manga-quizz-api-v1.onrender.com/api";

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

export {login, register};