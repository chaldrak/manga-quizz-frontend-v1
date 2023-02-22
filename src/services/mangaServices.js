const api_url = "https://manga-quizz-api-v1.onrender.com/api/mangas";

const getCharacters = async (token, id) => {
  const response = await fetch(`${api_url}/${id}/characters`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  return await response.json();
};

export {getCharacters};