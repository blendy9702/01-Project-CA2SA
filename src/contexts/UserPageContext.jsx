import { createContext, useState } from "react";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
  const [myPage, setMyPage] = useState({});
  console.log("넘어오는 데이터 : ", myPage);

  return (
    <UserPageContext.Provider value={{ myPage, setMyPage }}>
      {children}
    </UserPageContext.Provider>
  );
};
