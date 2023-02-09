import React from "react";
import { Col, Row } from "antd";

const AboutUs = () => {
  const stylesAboutUs = {
    logoSize: { width: "434px", height: "95px" },
    textFirst: { fontSize: "18px", fontWeight: "500" },
    textSecond: { fontSize: "30px", fontWeight: "500" },
    textThird: { fontSize: "17px", fontWeight: "400" },
  };

  return (
    <Row
      justify={"center"}
      className="px-2 py-4 mt-3"
      style={stylesAboutUs.fontStyle}
    >
      <Col xs={24} sm={24} md={24} lg={19}>
        <span style={stylesAboutUs.textFirst}>ABOUT US</span>
      </Col>

      <Col xs={24} sm={24} md={24} lg={19}>
        <span style={stylesAboutUs.textSecond}>Who we are?</span>
      </Col>
      <Col xs={24} sm={24} md={24} lg={9}>
        <span style={stylesAboutUs.textThird}>
          KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar t, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar
        </span>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={10}
        className="d-flex justify-content-center"
      >
        <img
          style={stylesAboutUs.logoSize}
          src="./images/navLogo.png"
          alt="nav-image"
        />
      </Col>
    </Row>
  );
};

export default AboutUs;
