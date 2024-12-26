import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);
  const [loginForm, setloginForm] = useState({
    nickName: "",
    email: "",
    upw: "",
    agree: "1",
  });
  //   const [userInfo, setUserInfo] = useState({});
  //   setUserInfo({ ...resultData });

  <LoginContext.Provider>{children}</LoginContext.Provider>;
};
