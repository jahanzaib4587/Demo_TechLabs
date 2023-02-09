import React from "react";
import { Col, Row } from "antd";

export const ProfileCards = (props) => {
  const { imgSrc, name, role, description } = props;

  const stylesProfileCards = {
    cardMainDiv: {
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "40px",
      display: "flex",
      justifuContent: "center",
      flexDirection: "column",
      alignItems: "center",
      padding: "125px 60px 15px 60px",
    },
    imagesStyle: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      top: "100px",
    },
    textName: { fontSize: "26px", fontWeight: 700 },
    textRole: { fontSize: "18px", fontWeight: 400 },
    textDescription: { fontSize: "17px", fontWeight: 400 },
  };
  return (
    <div>
      <div style={stylesProfileCards.imagesStyle}>
        <img src={imgSrc} />
      </div>

      <div style={stylesProfileCards.cardMainDiv}>
        <div>
          <span style={stylesProfileCards.textName}>{name}</span>
        </div>
        <div>
          <span style={stylesProfileCards.textRole}>{role}</span>
        </div>
        <div>
          <span style={stylesProfileCards.textDescription}>{description}</span>
        </div>
      </div>
    </div>
  );
};
