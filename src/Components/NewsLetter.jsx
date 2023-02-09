import React from "react";
import { Button, Input } from "antd";
const NewsLetter = () => {
  const stylesNewsLetter = {
    alignCenter: {
      textAlign: "center",
      marginTop: "55px",
      marginBottom: "60px",
    },
    text1: { fontWeight: "500", fontSize: "22px" },
    text2: { fontWeight: "700", fontSize: "35px" },
    text3: { fontWeight: "400", fontSize: "16px" },
    btnColor: {
      backgroundColor: "black",
      color: "white",
      fontWeight: "600",
      height:"40px"
    },
    text1Div: {
      paddingBottom: "30px",
    },
    text2Div: {
      paddingBottom: "30px",
    },
    text3DivSubParent: { width: "700px", paddingBottom: "40px" },
  };
  return (
    <div style={stylesNewsLetter.alignCenter}>
      <div>
        <div style={stylesNewsLetter.text1Div}>
          <span style={stylesNewsLetter.text1}>NEWSLETTER</span>
        </div>
        <div style={stylesNewsLetter.text2Div}>
          <span style={stylesNewsLetter.text2}>
            Subscribe Our To Newsletter
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <div style={stylesNewsLetter.text3DivSubParent}>
            <span style={stylesNewsLetter.text3}>
              KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem
              ipsum dolor sit amet, consectetur
            </span>
          </div>
        </div>
      </div>
      <div>
        <Input.Group compact>
          <Input
            style={{
              width: "calc(50% - 200px)",
              height:"40px"
            }}
            placeholder={"Your Email Address"}
            //   defaultValue="https://ant.design"
          />
          <Button style={stylesNewsLetter.btnColor}>Subscribe</Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default NewsLetter;
