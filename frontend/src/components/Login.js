// Login.js
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

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
            toast.success("Đăng nhập thành công!");
            const formattedUserName = JSON.stringify(userName);
            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", formattedUserName);
            window.location.reload();
        } else {
            toast.error(`Vui lòng kiểm tra lại thông tin đăng nhập: ${data.error}`);
        }
    };

    return (
        <div className="form-container">
            <h2>Đăng nhập</h2>
            <Form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Tên đăng nhập"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    required
                />
                <button type="submit" className="btn btn--dark">
                    <span>Đăng nhập</span>
                </button>
            </Form>
        </div>
    );
};

export default Login;
