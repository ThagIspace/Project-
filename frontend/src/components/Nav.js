import React from "react";
import { Form, NavLink } from "react-router-dom";

import demo from "../assets/img/demologo.png";

const Nav = ({ userName }) => {
    return (
      <nav>
        <NavLink
          to="/"
          aria-label="Go to home"
        >
          <img src={demo} alt="" height={30} />
          <span>EzMoney</span>
        </NavLink>
        {
          userName && (
            <Form
              method="post"
              action="logout"
              onSubmit={(event) => {
                // eslint-disable-next-line no-restricted-globals
                if (!confirm("Delete user and all data?")) {
                  event.preventDefault()
                }
              }}
            >
              <button type="submit" className="btn btn--warning">Đăng Xuất
          
          </button>
  
            </Form>
          )
        }
      </nav>
    )
  }
  export default Nav
