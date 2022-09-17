import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../../_action/user_action";

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPwHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPw) {
      return alert("비밀번호가 같지 않습니다.");
    }
    let body = {
      email: email,
      password: password,
      name: name,
    };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate("/");
      } else {
        alert("Failed to sign up");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        <label>password</label>
        <input type="password" value={password} onChange={onPwHandler} />
        <label>Confirm password</label>
        <input type="password" value={confirmPw} onChange={onConfirmPwHandler} />
        <br />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
