import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  const MainDiv = styled.div`
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

  return (
    <MainDiv>
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
            dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit
            amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet,
            consectetur adipiscing elit. KLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </TextFour>
        </TextFourDiv>
      </ClassContainer>
    </MainDiv>
  );
};

export default Testimonials;
