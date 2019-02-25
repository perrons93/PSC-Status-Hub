import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import scrollToTop from "../../helpers/scrollToTop";

const styles = {
  displayedButton: {
    display: "block",
    position: "fixed",
    bottom: "5%",
    right: "3%"
  }
};

class BackToTop extends Component {
  state = {
    buttonVisible: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleOnScroll);
  };

  // handle onScroll event
  handleOnScroll = () => {
    const currentScroll = document.documentElement.scrollTop;
    console.log(currentScroll);
    if (currentScroll > 20) {
      this.setState({ buttonVisible: true });
    } else {
      this.setState({ buttonVisible: false });
    }
  };

  render() {
    const { buttonVisible } = this.state;
    return (
      <div>
        {buttonVisible && (
          <div id="displayedBtn">
            {/* <span hidden>The back to top button is displayed</span> */}
            <a
              style={styles.displayedButton}
              href="#main-content"
              className="btn btn-back-to-top"
              onClick={() => scrollToTop()}
            >
              <i className="fa fa-arrow-up icon" />
              &nbsp;{LOCALIZE.commons.backToTop}
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default BackToTop;
