import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

export const ProfileCards = (props) => {
  const { imgSrc, name, role, description } = props;

  const TextName = styled.span`
    font-size: 26px;
    font-weight: 700;
    @media only screen and (max-width: 320px) {
      font-size: 20px;
    }
  `;
  const TextRole = styled.span`
    font-size: 16px;
    font-weight: 500;
    @media only screen and (max-width: 320px) {
      font-size: 12px;
    }
  `;
  const TextDescription = styled.span`
    font-weight: 400;
    font-size: 16px;
    display: block;
    text-align: justify;
    @media only screen and (max-width: 320px) {
      font-size: 13px;
    }
  `;

  const CardAdjustments = styled.div`
    margin-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
  `;
  const CardMainDiv = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 125px 60px 15px 60px;
  `;
  const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
    @media only screen and (max-width: 320px) {
      top: 85px;
    }
  `;
  const SpaceTopBottom = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const RoundImage = styled.img`
    @media only screen and (max-width: 320px) {
      width: 50%;
    }
    
  `;
  return (
    <CardAdjustments>
      <ImageDiv>
        <RoundImage src={imgSrc} />
      </ImageDiv>

      <CardMainDiv>
        <div>
          <TextName>{name}</TextName>
        </div>
        <SpaceTopBottom>
          <TextRole>{role}</TextRole>
        </SpaceTopBottom>
        <div>
          <TextDescription>{description}</TextDescription>
        </div>
      </CardMainDiv>
    </CardAdjustments>
  );
};
