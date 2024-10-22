// Register.js
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (registerPassword !== confirmPassword) {
            toast.error("Mật khẩu và xác nhận mật khẩu không khớp!");
            return;
        }

        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: registerUserName,
                password: registerPassword,
            }),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success("Đăng ký thành công!");
        } else {
            toast.error(`Đăng ký thất bại: ${data.error}`);
        }
    };

    return (
        <div className="form-container">
            <h2>Đăng ký</h2>
            <Form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={registerUserName}
                    onChange={(e) => setRegisterUserName(e.target.value)}
                    placeholder="Tên của bạn là gì?"
                    required
                />
                <input
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Xác nhận mật khẩu"
                    required
                />
                <button type="submit" className="btn btn--dark">
                    <span>Tạo tài khoản</span>
                </button>
            </Form>
        </div>
    );
};

export default Register;
