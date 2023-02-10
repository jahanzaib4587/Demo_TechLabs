import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";
import { Button, Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Home
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Feature
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Shop
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        About Us
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Contact Us
      </a>
    ),
  },
];

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
      <Dropdown
        className="hideBreadCrum"
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button>
          <img src="./images/sandwitch.png" alt="hidden-icons" />
        </Button>
      </Dropdown>

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
