import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import scrollToTop from "../../helpers/scrollToTop";

const styles = {
  displayedButton: {
    display: "block",
    position: "fixed",
    bottom: 20,
    right: 20
  }
};

class BackToTop extends Component {
  state = {
    buttonVisible: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleOnScroll, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleOnScroll, false);
  };

  // handle onScroll event
  handleOnScroll = () => {
    const currentScroll = document.documentElement.scrollTop;
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
          <div id="unit-test-button-visible">
            <a
              style={styles.displayedButton}
              href="#main-content"
              className="btn btn-backtotop"
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
