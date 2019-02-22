import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import scrollToTop from "../../helpers/scrollToTop";

const styles = {
  button: {
    display: "block",
    position: "fixed",
    bottom: "5%",
    right: "3%"
  }
};

class BackToTop extends Component {
  displayBackToTopButton = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopButton").style.display = "block";
    } else {
      document.getElementById("backToTopButton").style.display = "none";
    }
  };

  render() {
    return (
      <div>
        {/* {this.displayBackToTopButton()} */}
        <div>
          <a
            id="backToTopButton"
            style={styles.button}
            href="#main-content"
            className="btn btn-back-to-top"
            onClick={scrollToTop()}
          >
            <i className="fa fa-arrow-up icon" />
            &nbsp;{LOCALIZE.commons.backToTop}
          </a>
        </div>
      </div>
    );
  }
}

export default BackToTop;
