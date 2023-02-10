import React from "react";

const Testimonials = () => {
  const stylesTesttimonials = {
    textAlign: {
      textAlign: "center",
      backgroundColor: "white",
      padding: "40px",
    },
    text1: { fontWeight: "500", fontSize: "22px" },
    text2: { fontWeight: "700", fontSize: "30px" },
    text3: { fontWeight: "500", fontSize: "24px" },
    text3Div: {
      paddingBottom: "30px",
    },
    text4: {
      fontWeight: "400",
      fontSize: "16px",
    },
    text4Div: {
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      padding: "30px 40px 40px 40px",
      borderRadius: "10px",
      marginTop: "30px",
      // width: "900px",
    },
    classContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
  return (
    <div style={stylesTesttimonials.textAlign}>
      <div className="container" style={stylesTesttimonials.classContainer}>
        <div>
          <span style={stylesTesttimonials.text1}>WE ARE TRUSTED</span>
        </div>
        <div>
          <span style={stylesTesttimonials.text2}> What they say about us</span>
        </div>

        <div style={stylesTesttimonials.text4Div}>
          <div style={stylesTesttimonials.text3Div}>
            <span style={stylesTesttimonials.text3}>
              We Always Give The Best
            </span>
          </div>
          <span style={stylesTesttimonials.text4}>
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
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
