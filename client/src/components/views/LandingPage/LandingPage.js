import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LandingPage = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    axios.get("/user/logout").then((res) => {
      if (res.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 실패");
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
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
};

export default LandingPage;
