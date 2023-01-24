import { createContext, useEffect, useState } from "react";
import { getItem } from "../services/localStorage";
import { getUser } from "../services/userServices";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const userToken = getItem() || {};
  const [auth, setAuth] = useState(userToken);
  const [user, setUser] = useState({});

  const dataUserConnected = async () => {
    const response = await getUser(auth?.token);
    if (response?.error) {
      console.log(response?.error);
      return;
    }
    setUser(response?.user);
  };

  useEffect(() => {
    dataUserConnected();
  }, [user]);

  return (
    <DataContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
