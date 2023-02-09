import React from "react";
import { Col, Row } from "antd";
import { ProfileCards } from "./Reuseables/ProfileCards";

const OurTeam = () => {
  const stylesOurTeam = {
    textFirst: {
      fontSize: "22px",
      fontWeight: "600",
      display: "block",
    },
    textSecond: {
      fontSize: "30px",
      fontWeight: "700",
      display: "block",
    },
    textAlignCenter: { textAlign: "center" },
    marginTopBottom: { marginTop: "70px" },
    cardStyles: {
      // marginTop: "40px",
      marginBottom: "40px",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  };

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
        className="d-flex justify-content-center"
        style={stylesOurTeam.marginTopBottom}
      >
        <div style={stylesOurTeam.textAlignCenter}>
          <span style={stylesOurTeam.textFirst}>Our Team</span>

          <span style={stylesOurTeam.textFirst}>Meet Our Team</span>
        </div>
      </Col>

      {CardObjects.map((props) => {
        return (
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className="d-flex justify-content-center"
            style={stylesOurTeam.cardStyles}
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
