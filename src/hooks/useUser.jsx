import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const useUser = () => {
  return useContext(DataContext);
};

export default useUser;
