import React, { useContext, useState, useEffect } from "react";
import "./newnav.css";
import { Link, NavLink } from "react-router-dom";
import {
  GoGraph,
  GoOrganization,
  GoCalendar,
  GoPerson,
  GoSignOut,
  GoPlus,
} from "react-icons/go";
import { State } from "../Context";

const NewNav = () => {
  const [userName, setUserName] = useState("");
  const { setUserData, setIsAuth } = useContext(State);
  const onLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    setIsAuth(false);
    localStorage.setItem("auth-token", "");
    localStorage.setItem("data", "");
  };
  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("data"));
    setUserName(name.username);
  }, []);
  return (
    <div className="newBody">
      <div className="main-nav">
        <ul className="main-nav-list">
          <NavLink to="/user" activeClassName="current">
            <li className="main-nav-item">
              <GoGraph className="icon" /> Dashboard
            </li>
          </NavLink>
          <NavLink to="/newpeople" activeClassName="current">
            <li className="main-nav-item">
              <GoOrganization className="icon" /> People
            </li>
          </NavLink>
          <NavLink to="/newcalendar" activeClassName="current">
            <li className="main-nav-item">
              <GoCalendar className="icon" /> Calendar
            </li>
          </NavLink>
          <NavLink to="/addevent" activeClassName="current">
            <li className="main-nav-item">
              <GoPlus className="icon" /> New Event
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="user-tab">
        <Link to="/user" style={{ textDecoration: "none" }}>
          <h1 className="username">
            <GoPerson className="icon" />
            {userName}
          </h1>
        </Link>
        <Link to="/" onClick={onLogout} style={{ textDecoration: "none" }}>
          <h1 className="username">
            <GoSignOut className="icon" /> Logout
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default NewNav;
