
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const initData = [
  {
    nickName: "홍길동",
    email: "yaho@gmail.com",
    upw: "1111",
    agree: 1,
  },
];

const loginSchema = yup.object({
  nickName: yup.string().required("닉네임을 입력하세요."),
  email: yup
    .string()
    .email("올바른 이메일이 아닙니다.")
    .required("이메일을 입력하세요...."),
  npw: yup
    .string()
    .min(4, "비밀번호는 최소 4자리입니다.")
    .max(12, "비밀번호는 최대 12자리입니다. ")
    .required("비밀번호는 필수 입니다."),
});

const JoinPage = () => {
  return <div>JoinPage</div>;
};

export default JoinPage;
