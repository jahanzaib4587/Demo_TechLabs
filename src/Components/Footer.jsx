import React from "react";
import { Col, Row, Divider } from "antd";
import { Button, Input } from "antd";
import styled from "styled-components";
const Footer = () => {
  const ImageSize = styled.img`
    width: 250px;
    height: 55px;
  `;

  const ImageStyles = styled(Col)`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
  `;

  const RowColor = styled(Row)`
    background-color: white;
    padding-bottom: 40px;
  `;

  const FooterLogos = styled.img`
    background-color: black;
    padding: 5px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 5px;
  `;

  const TextFirst = styled.span`
    font-weight: 600;
    font-size: 18px;
  `;

  const HeadingTextFooter = styled.span`
    font-weight: 600;
    font-size: 18px;
  `;

  const IconsPadding = styled.img`
    padding-left: 5px;
    padding-right: 5px;
  `;

  const Btn = styled(Button)`
    background-color: #848484;
    color: white;
    font-weight: 600;
  `;

  const DivFooterLastItem = styled.div`
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 20px;
  `;

  const MarginBottom20 = styled.div`
    margin-bottom: 20px;
  `;

  const LastRow = styled(Col)`
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  return (
    <RowColor justify="center">
      <ImageStyles xs={24} sm={24} md={24} lg={24}>
        <ImageSize src="./images/navLogo.png" />
      </ImageStyles>
      <Divider />
      <Col style={{ marginBottom: "20px" }} xs={20} sm={24} md={4} lg={4}>
        <div>
          <HeadingTextFooter>Reach Us</HeadingTextFooter>
        </div>
        <div>
          <IconsPadding src="./images/phone.png" />
          <span>+1012 3456 789</span>
        </div>
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <IconsPadding src="./images/email.png" />
          <span>demo@gmail.com</span>
        </div>
        <div>
          <IconsPadding src="./images/map.png" />
          <span>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </Col>
      <Col xs={10} sm={24} md={4} lg={4}>
        <div>
          <HeadingTextFooter>Company</HeadingTextFooter>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
        <div>
          <span>Blogs</span>
        </div>
      </Col>
      <Col xs={10} sm={24} md={4} lg={4}>
        <div>
          <HeadingTextFooter>Legal</HeadingTextFooter>
        </div>
        <div>
          <span>Privacy Policy</span>
        </div>
        <div>
          <span>Terms & Services</span>
        </div>
        <div>
          <span>Term of Use</span>
        </div>
        <div>
          <span>Refund Policy</span>
        </div>
      </Col>
      <Col
        style={{ marginBottom: "30px", marginTop: "20px" }}
        xs={20}
        sm={24}
        md={4}
        lg={4}
      >
        <div>
          <HeadingTextFooter>Useful Links</HeadingTextFooter>
        </div>
        <div>
          <span>Tech Labz</span>
        </div>
        <div>
          <span>Downloads</span>
        </div>
        <div>
          <span>Form</span>
        </div>
      </Col>
      <LastRow xs={24} sm={24} md={24} lg={6}>
        <div style={{ marginBottom: "7px" }}>
          <FooterLogos src="./images/insta.png" />
          <FooterLogos src="./images/linkedin.png" />
          <FooterLogos src="./images/google.png" />
          <FooterLogos src="./images/fb.png" />
          <FooterLogos src="./images/twitter.png" />
          <FooterLogos src="./images/youtube.png" />
        </div>
        <DivFooterLastItem>
          <MarginBottom20>
            <TextFirst>Join Our News Letter</TextFirst>
          </MarginBottom20>
          <MarginBottom20>
            <Input.Group compact>
              <Input
                style={{ width: "50%" }}
                placeholder={"Your Email Address"}
                //   defaultValue="https://ant.design"
              />

              <Btn>Subscribe</Btn>
            </Input.Group>
          </MarginBottom20>
          <span>
            * Will send you weekly updates for your better tool management.
          </span>
        </DivFooterLastItem>
      </LastRow>
    </RowColor>
  );
};

export default Footer;
