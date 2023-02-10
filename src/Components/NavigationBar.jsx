import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";

const NavigationBar = () => {
  
  const MainContainer = styled.div`
    box-shadow: 0px 4px 18px rgba(150, 150, 150, 0.25);
    align-items: center;
  `;

  const SearchIcon = styled(SearchOutlined)`
    color: #a6a6a6;
  `;

  const Logo = styled.img`
    @media (min-width: 1024px) and (max-width: 768px) {
      width: 60%;
    }
  `;

  return (
    <MainContainer className="navbar-container d-flex justify-content-around">
      <div>
        <Logo src="./images/navLogo.png" alt="nav-image" />
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

      <div className="d-flex align-items-center">
        <Input size="large" placeholder="Search Here" prefix={<SearchIcon />} />
        <img src="./images/cart.png" alt="cart-image" className="mx-4" />
        <img src="./images/profile.png" alt="profile-icon" className="mx-2" />
      </div>
    </MainContainer>
  );
};

export default NavigationBar;
