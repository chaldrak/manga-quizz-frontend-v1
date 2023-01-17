const setItem = (credentials) => {
    localStorage.setItem("user", JSON.stringify(credentials));
};

const getItem = () => {
    return JSON.parse(localStorage.getItem("user")); 
};

const removeItem = () => {
    localStorage.removeItem("user"); 
};

export {setItem, getItem, removeItem};