import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";

const NavigationBar = () => {
  const [hideNavLinks, setHideNavLinks] = useState(false);
  const MainContainer = styled.div`
    box-shadow: 0px 4px 18px rgba(150, 150, 150, 0.25);
    align-items: center;
  `;

  const SearchIcon = styled(SearchOutlined)`
    color: #a6a6a6;
  `;

  return (
    <MainContainer className="navbar-container d-flex justify-content-around">
      <div className="hideBreadCrum">
        <img
          onClick={() => {
            setHideNavLinks(!hideNavLinks);
          }}
          src="./images/sandwitch.png"
          alt="hidden-icons"
        />
      </div>
      <div>
        <img className="navLogo" src="./images/navLogo.png" alt="nav-image" />
      </div>

      <div className="navLinks">
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

      <div className="d-flex align-items-center">
        <Input
          size="medium"
          placeholder="Search Here"
          prefix={<SearchIcon />}
          className="navInput navSearch"
        />
        <div className="NavLogos">
          <img
            className="NavLogoSpacing1"
            src="./images/cart.png"
            alt="cart-image"
          />
          <img
            className="NavLogoSpacing2"
            src="./images/profile.png"
            alt="profile-icon"
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default NavigationBar;
