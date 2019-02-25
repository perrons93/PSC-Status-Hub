import React from "react";
import mini_banner from "./../../images/mini_banner.png";

const styles = {
  container: {
    maxWidth: 1140,
    margin: "0px auto",
    textAlign: "left",
    paddingTop: 20
  }
};

const ContentContainer = props => {
  return (
    <div>
      {!props.hideBanner && <img src={mini_banner} alt="" className="banner" />}
      <div style={styles.container}>{props.children}</div>
    </div>
  );
};

export default ContentContainer;
