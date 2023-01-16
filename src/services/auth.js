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

export {login};