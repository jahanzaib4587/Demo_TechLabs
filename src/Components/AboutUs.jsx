import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const AboutUs = () => {
  const TextAboutUs = styled.span`
    font-size: 18px;
    font-weight: 500;
    display: block;
  `;
  const TextWhoWeAre = styled.span`
    font-size: 30px;
    font-weight: 500;
    display: block;
  `;
  const TextDescription = styled.span`
    font-size: 17px;
    font-weight: 400;
    display: block;
    text-align: justify;
  `;
  const LogoStyle = styled.img`
    width: 50%;
    height: auto;
  `;

  return (
    <Row justify={"center"} className="px-2 py-4 mt-3">
      <Col xs={22} sm={22} md={22} lg={19}>
        <TextAboutUs>ABOUT US</TextAboutUs>

        <TextWhoWeAre>Who we are?</TextWhoWeAre>

        <TextDescription>
          KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar t, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar
        </TextDescription>
      </Col>

      <Col
        xs={22}
        sm={22}
        md={22}
        lg={10}
        className="d-flex justify-content-center"
      >
        <LogoStyle src="./images/navLogo.png" alt="nav-image" />
      </Col>
    </Row>
  );
};

export default AboutUs;
