import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
const NewsLetter = () => {
  const TextOne = styled.span`
    font-weight: 500;
    font-size: 22px;
  `;
  const TextTwo = styled.span`
    font-weight: 700;
    font-size: 35px;
    @media only screen and (max-width: 768px) {
      font-size: 19px;
    }
  `;
  const TextThree = styled.span`
    font-weight: 400;
    font-size: 16px;
  `;
  const BtnColor = styled(Button)`
    background-color: black;
    color: white;
    font-weight: 600;
    height: 40px;
  `;
  const MainDiv = styled.div`
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
  return (
    <MainDiv>
      <div>
        <DivPaddingBottom>
          <TextOne>NEWSLETTER</TextOne>
        </DivPaddingBottom>
        <DivPaddingBottom>
          <TextTwo>Subscribe Our To Newsletter</TextTwo>
        </DivPaddingBottom>
        <div className="d-flex justify-content-center">
          <Text3DivSubParent>
            <TextThree>
              KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem
              ipsum dolor sit amet, consectetur
            </TextThree>
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
    </MainDiv>
  );
};

export default NewsLetter;
