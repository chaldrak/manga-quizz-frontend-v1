import { getItem } from "./localStorage";

const getUserInfo = () => {
    const token = getItem()?.token;
    const user = JSON.parse(atob(token.split(".")[1]));
    return user;
}

export default getUserInfo;