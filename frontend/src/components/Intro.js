import React, { useState } from "react";
import { Form, } from "react-router-dom";

const Intro = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registerUserName, setRegisterUserName] = useState(""); // State riêng cho đăng ký
  const [registerPassword, setRegisterPassword] = useState(""); // State riêng cho đăng ký

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Login successful!", data);
      const formattedUserName = JSON.stringify(userName); // Đảm bảo userName nằm trong dấu nháy kép
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", formattedUserName); // Lưu vào localStorage
      window.location.reload()
    } else {
      console.error(data.error);
    }
  };
  

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: registerUserName, password: registerPassword }), // Sử dụng state riêng cho đăng ký
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Registration successful!", data);
    } else {
      console.error(data.error);
    }
  };

  return (
    <div className="intro">
      <div>
        <h1>
          Chào mừng đến với <span className="accent">EzMoney</span> - ứng dụng
          quản lý tài chính cá nhân
        </h1>
      </div>

      <div className="form-container">
        <h2>Đăng nhập</h2>
        <Form onSubmit={handleLogin}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // Cập nhật state cho đăng nhập
            placeholder="Tên đăng nhập"
            aria-label="Your Username"
            autoComplete="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Cập nhật state cho đăng nhập
            placeholder="Mật khẩu"
            aria-label="Your Password"
            autoComplete="current-password"
            required
          />
          <button type="submit" className="btn btn--dark">
            <span>Đăng nhập</span>
          </button>
        </Form>
      </div>

      <div className="form-container">
        <h2>Đăng ký</h2>
        <Form onSubmit={handleRegister}>
          <input
            type="text"
            value={registerUserName} // Sử dụng state riêng cho đăng ký
            onChange={(e) => setRegisterUserName(e.target.value)} // Cập nhật state riêng cho đăng ký
            placeholder="Tên của bạn là gì?"
            aria-label="Your Name"
            autoComplete="given-name"
            required
          />
          <input
            type="password"
            value={registerPassword} // Sử dụng state riêng cho đăng ký
            onChange={(e) => setRegisterPassword(e.target.value)} // Cập nhật state riêng cho đăng ký
            placeholder="Mật khẩu"
            aria-label="Your Password"
            autoComplete="new-password"
            required
          />
          <button type="submit" className="btn btn--dark">
            <span>
              Tạo tài khoản{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-add"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
              </svg>
            </span>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Intro;
