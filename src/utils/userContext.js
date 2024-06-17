import { createContext, useState } from "react";

const loggedUserContext = createContext("");

const LoggedInUserProvider = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <loggedUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </loggedUserContext.Provider>
  );
};

export { LoggedInUserProvider, loggedUserContext };