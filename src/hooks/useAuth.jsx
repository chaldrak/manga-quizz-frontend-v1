import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const useAuth = () => {
  const { auth, setAuth } = useContext(DataContext);
  return { auth, setAuth };
};

export default useAuth;
