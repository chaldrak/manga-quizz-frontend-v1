import { useContext } from "react";
import DataContext from "../context/DataProvider";

const useAuth = () => {
  return useContext(DataContext);
};

export default useAuth;
