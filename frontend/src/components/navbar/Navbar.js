import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const Navbar = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    Cookies.remove("token");
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
              localStorage.getItem("user_name") ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">خانه</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/search">جستجو</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/create">ارسال بلاگ</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blog/myblog">پست های شما</NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>خروج</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">خانه</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">ورود</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">ثبت نام</NavLink>
                  </li>
                
                </>
              )
            }

          </ul>

        </div>

        <NavLink className="navbar-brand" to="#">Blog TopLearn</NavLink>
      </div>
    </nav>
  )
}

export default Navbar