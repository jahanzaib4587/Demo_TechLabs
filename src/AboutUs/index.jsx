import React from "react";
import { Col, Row, Button, Input } from "antd";
import { ProfileCards } from "../Components/ProfileCards";
import styled from "styled-components";

export const AboutUs = () => {
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
    width: 40%;
    height: auto;
    @media only screen and (max-width: 425px) {
      width: 70%;
    }
  `;
  const MainDiv = styled(Row)`
    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  `;
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

  const MainDivT = styled.div`
    text-align: center;
    background-color: white;
    padding: 40px;
    @media (max-width: 320px) {
      padding: 10px;
    }
  `;
  const TextOne = styled.span`
    font-weight: 700;
    font-size: 30px;
    @media (max-width: 320px) {
      font-size: 25px;
    }
  `;
  const TextTwo = styled.span`
    font-weight: 500;
    font-size: 22px;
    @media (max-width: 320px) {
      font-size: 18px;
    }
  `;
  const TextThree = styled.span`
    font-weight: 500;
    font-size: 24px;
  `;
  const TextFour = styled.span`
    font-weight: 400;
    font-size: 16px;
  `;
  const TextThreeDiv = styled.div`
    padding-bottom: "30px";
  `;
  const TextFourDiv = styled.div`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 40px 40px 40px;
    border-radius: 10px;
    margin-top: 30px;
    @media (max-width: 320px) {
      padding: 30px 20px 40px 20px;
    }
  `;

  const ClassContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const QuoteImage = styled.img`
    padding-right: 10px;
  `;

  const TextOneN = styled.span`
    font-weight: 500;
    font-size: 22px;
  `;
  const TextTwoN = styled.span`
    font-weight: 700;
    font-size: 35px;
    @media only screen and (max-width: 768px) {
      font-size: 19px;
    }
  `;
  const TextThreeN = styled.span`
    font-weight: 400;
    font-size: 16px;
  `;
  const BtnColor = styled(Button)`
    background-color: black;
    color: white;
    font-weight: 600;
    height: 40px;
  `;
  const MainDivN = styled.div`
    text-align: center;
    margin-top: 55px;
    margin-bottom: 60px;
  `;
  const DivPaddingBottom = styled.div`
    paddind-bottom: 30px;
  `;
  const Text3DivSubParent = styled.div`
    width: 55%;
    padding-bottom: 40px;
  `;
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
    <>
      <MainDiv justify={"center"} className="px-2 py-4 mt-3">
        <Col xs={22} sm={22} md={22} lg={19}>
          <TextAboutUs>ABOUT US</TextAboutUs>

          <TextWhoWeAre>Who we are?</TextWhoWeAre>

          <TextDescription>
            KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar t, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar
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
      </MainDiv>
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
      <MainDivT>
        <ClassContainer className="container">
          <div>
            <TextOne>WE ARE TRUSTED</TextOne>
          </div>
          <div>
            <TextTwo> What they say about us</TextTwo>
          </div>

          <TextFourDiv>
            <TextThreeDiv>
              <QuoteImage src="./images/quote.png" />
              <TextThree>We Always Give The Best</TextThree>
            </TextThreeDiv>
            <TextFour>
              KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem
              ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum
              dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor
              sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit
              amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </TextFour>
          </TextFourDiv>
        </ClassContainer>
      </MainDivT>
      <MainDivN>
        <div>
          <DivPaddingBottom>
            <TextOneN>NEWSLETTER</TextOneN>
          </DivPaddingBottom>
          <DivPaddingBottom>
            <TextTwoN>Subscribe Our To Newsletter</TextTwoN>
          </DivPaddingBottom>
          <div className="d-flex justify-content-center">
            <Text3DivSubParent>
              <TextThreeN>
                KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit KLorem ipsum dolor sit amet, consectetur adipiscing elit.
                KLorem ipsum dolor sit amet, consectetur
              </TextThreeN>
            </Text3DivSubParent>
          </div>
        </div>
        <div>
          <Input.Group compact>
            <Input
              style={{
                width: "50%",
                height: "40px",
              }}
              placeholder={"Your Email Address"}
              //   defaultValue="https://ant.design"
            />
            <BtnColor>Subscribe</BtnColor>
          </Input.Group>
        </div>
      </MainDivN>
    </>
  );
};
