// Intro.js
import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Chào mừng đến với <span className="accent">EzMoney</span> - ứng dụng
          quản lý tài chính cá nhân
        </h1>
      </div>
      <Login />
      <Register />
    </div>
  );
};

export default Intro;
