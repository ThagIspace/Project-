import React from "react";
import { Form, NavLink } from "react-router-dom";
import demo from "../assets/img/demologo.png";

const Nav = ({ userName }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <NavLink to="/" aria-label="Go to home" className="nav-logo">
          <img src={demo} alt="EzMoney Logo" height={30} />
          <span>EzMoney</span>
        </NavLink>
        <NavLink to="/bank-sync" activeClassName="active" className="nav-link">
          Support
        </NavLink>
      </div>

      <div className="nav-right">
        {!userName ? (
          <>
            <NavLink to="/login" className="btn btn--outline">
              Log in
            </NavLink>
            <NavLink to="/signup" className="btn btn--outline">
              Sign up
            </NavLink>
          </>
        ) : (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!window.confirm("Bạn muốn đăng xuất?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              Đăng Xuất
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};

export default Nav;
