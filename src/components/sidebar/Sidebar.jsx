import { useContext } from "react";
import { styled, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { links } from "./Sidebar.data";
import "./Sidebar.scss";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MUI Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {links.map((item) => (
            <div key={item.title}>
              <p className="title">{item.title}</p>
              {item.links.map((link) => (
                <li key={link.name}>
                  <Link to={`/${link.link}`} style={{ textDecoration: "none" }}>
                    <span className="icon">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
