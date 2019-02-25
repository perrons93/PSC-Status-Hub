import React from "react";

const styles = {
  container: {
    maxWidth: 1140,
    margin: "0px auto",
    textAlign: "left"
  }
};

const ContentContainer = props => {
  return <div style={styles.container}>{props.children}</div>;
};

export default ContentContainer;
