import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const NavigationBar = () => {
  const StylesNavBar = {
    navMain: {
      boxShadow: "0px 4px 18px rgba(150, 150, 150, 0.25)",
      alignItems: "center",
    },
    searchIcon: { color: "#a6a6a6" },
  };

  return (
    <div
      className="navbar-container d-flex justify-content-around"
      style={StylesNavBar.navMain}
    >
      <div>
        <img src="./images/navLogo.png" alt="nav-image" />
      </div>

      <div>
        <ul>
          <li className="nav-link ">
            <a href="#">Home</a>
            <div className="underline"></div>
          </li>
          <li className="nav-link">
            <a href="#">Feature</a>
            <div className="underline"></div>
          </li>
          <li className="nav-link">
            <a href="#">Shop</a>
            <div className="underline"></div>
          </li>
          <li className="nav-link active-link">
            <a href="#">About Us</a>
            <div className="underline"></div>
          </li>
          <li className="nav-link">
            <a href="#">Contact Us</a>
            <div className="underline"></div>
          </li>
        </ul>
      </div>

      <div>
        <Input
          size="large"
          placeholder="Search Here"
          prefix={<SearchOutlined style={StylesNavBar.searchIcon} />}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
