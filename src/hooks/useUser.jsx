import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const useUser = () => {
  const { user, setUser } = useContext(DataContext);
  return { user, setUser };
};

export default useUser;
