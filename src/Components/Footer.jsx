import React from "react";
import { Col, Row, Divider } from "antd";
import { Button, Input } from "antd";
const Footer = () => {
  const styleFooter = {
    imageSize: {
      width: "250px",
      height: "55px",
    },
    imageStyles: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: "30px",
      paddingTop: "30px",
    },
    rowColor: {
      backgroundColor: "white",
      paddingBottom: "40px",
    },
    footerLogos: {
      backgroundColor: "black",
      padding: "7px",
      borderRadius: "50px",
      marginLeft: "5px",
      marginRight: "5px",
    },
    textFirst: {
      fontWeight: "600",
      fontSize: "18px",
    },
    textFirstDiv: {
      paddingBottom: "10px",
    },
    headingTextFooter: {
      fontWeight: "600",
      fontSize: "18px",
    },
    iconsPadding: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
    btn: {
      backgroundColor: "#848484",
      color: "white",
      fontWeight: "600",
    },
    divFooterLastItem: {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
      borderRadius: "20px",
    },
    marginBottom20: { marginBottom: "20px" },
    inputWidth: { width: "70%" },
  };
  return (
    <Row style={styleFooter.rowColor} justify="center">
      <Col xs={24} sm={24} md={24} lg={24} style={styleFooter.imageStyles}>
        <img style={styleFooter.imageSize} src="./images/navLogo.png" />
      </Col>
      <Divider />
      <Col xs={24} sm={24} md={4} lg={4}>
        <div>
          <span style={styleFooter.headingTextFooter}>Reach Us</span>
        </div>
        <div>
          <img style={styleFooter.iconsPadding} src="./images/phone.png" />
          <span>+1012 3456 789</span>
        </div>
        <div style={{marginBottom:"5px",marginTop:"5px"}}>
          <img style={styleFooter.iconsPadding} src="./images/email.png" />
          <span>demo@gmail.com</span>
        </div>
        <div>
          <img style={styleFooter.iconsPadding} src="./images/map.png" />
          <span>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </Col>
      <Col xs={24} sm={24} md={4} lg={4}>
        <div>
          <span style={styleFooter.headingTextFooter}>Company</span>
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
      <Col xs={24} sm={24} md={4} lg={4}>
        <div>
          <span style={styleFooter.headingTextFooter}>Legal</span>
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
      <Col xs={24} sm={24} md={4} lg={4}>
        <div>
          <span style={styleFooter.headingTextFooter}>Useful Links</span>
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
      <Col xs={24} sm={24} md={24} lg={6}>
        <div style={{marginBottom:"7px"}}>
          <img style={styleFooter.footerLogos} src="./images/insta.png" />
          <img style={styleFooter.footerLogos} src="./images/linkedin.png" />
          <img style={styleFooter.footerLogos} src="./images/google.png" />
          <img style={styleFooter.footerLogos} src="./images/fb.png" />
          <img style={styleFooter.footerLogos} src="./images/twitter.png" />
          <img style={styleFooter.footerLogos} src="./images/youtube.png" />
        </div>
        <div style={styleFooter.divFooterLastItem}>
          <div style={styleFooter.marginBottom20}>
            <span style={styleFooter.textFirst}>Join Our News Letter</span>
          </div>
          <div style={styleFooter.marginBottom20}>
            <Input.Group compact>
              <Input
                style={styleFooter.inputWidth}
                placeholder={"Your Email Address"}
                //   defaultValue="https://ant.design"
              />

              <Button style={styleFooter.btn}>Subscribe</Button>
            </Input.Group>
          </div>
          <span>
            * Will send you weekly updates for your better tool management.
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
