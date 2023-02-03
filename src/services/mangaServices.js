const api_url = "http://localhost:8080/api/mangas";

const getCharacters = async (token, id) => {
  const response = await fetch(`${api_url}/${id}/characters`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

export {getCharacters};