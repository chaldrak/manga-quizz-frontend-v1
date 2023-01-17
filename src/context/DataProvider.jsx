import { createContext, useState } from "react";
import { getItem } from "../services/localStorage";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const dataUser = getItem() || {};
  const [auth, setAuth] = useState(dataUser);
  // const localUser = localStorage.getItem("user");
  // const data = localUser ? JSON.parse(localUser) : {};
  // const [auth, setAuth] = useState(data);

  return (
    <DataContext.Provider value={{ auth, setAuth }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
