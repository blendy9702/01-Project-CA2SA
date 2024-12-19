import { useState } from "react";

const LoginContext = () => {
  const initData = [
    {
      email: "yaho@gmail.com",
      upw: "1111",
      nickName: "홍길동",
      phone: "01012345678",
      agree: 1,
    },
  ];
  const [formData, setFormData] = useState(initData);

  return <div>LoginContext</div>;
};

export default LoginContext;
