import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);
  const [loginForm, setloginForm] = useState({
    nickName: "",
    email: "",
    upw: "",
  });

  <LoginContext.Provider>{children}</LoginContext.Provider>;
};
