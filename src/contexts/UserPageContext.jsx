import { Children, createContext, useContext, useState } from "react";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
  const [myPage, setMyPage] = useState({});
  return (
    <UserPageContext.Provider value={(myPage, setMyPage)}>
      {children}
    </UserPageContext.Provider>
  );
};
