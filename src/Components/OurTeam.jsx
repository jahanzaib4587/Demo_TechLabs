import React from "react";
import { Col, Row } from "antd";
import { ProfileCards } from "./Reuseables/ProfileCards";
import styled from "styled-components";

const OurTeam = () => {
  const TextFirst = styled.span`
    font-size: 22px;
    font-weight: 600;
    display: block;
  `;
  const TextCenter = styled.div`
    text-align: center;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const SpaceTop70 = styled.div`
    margin-top: 70px;
  `;

  // const CardBox = styled.Card

  // @media (max-width: 768px) {
  const CardObjects = [
    {
      img: "./images/profile1.png",
      name: "Danny Doe",
      role: "PRESIDENT & CO-FOUNDER",
      description:
        "KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, consectetur adipiscKLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, conse",
    },
    {
      img: "./images/profile2.png",
      name: "Danny Doe",
      role: "PRESIDENT & CO-FOUNDER",
      description:
        "KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, consectetur adipiscKLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, conse",
    },
  ];

  return (
    <Row justify={"center"}>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        className="d-flex justify-content-center mt-5"
      >
        <TextCenter>
          <TextFirst>Our Team</TextFirst>
          <TextFirst>Meet Our Team</TextFirst>
        </TextCenter>
      </Col>

      {CardObjects.map((props, key) => {
        return (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={10}
            className="d-flex justify-content-center"
            key={key}
          >
            <ProfileCards
              imgSrc={props.img}
              name={props.name}
              role={props.role}
              description={props.description}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default OurTeam;
