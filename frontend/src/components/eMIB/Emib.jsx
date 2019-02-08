import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";

const PAGES = {
  welcome: "welcome",
  howTo: "howTo",
  background: "background",
  inbox: "inbox",
  confirm: "confirm"
};

class Emib extends Component {
  state = {
    curPage: PAGES.welcome
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.welcome:
        this.setState({ curPage: PAGES.howTo });
        break;
      case PAGES.howTo:
        this.setState({ curPage: PAGES.background });
        break;
      case PAGES.background:
        this.setState({ curPage: PAGES.inbox });
        break;
      case PAGES.inbox:
        this.setState({ curPage: PAGES.confirm });
        break;
      default:
        this.setState({ curPage: PAGES.welcome });
        break;
    }
  };

  render() {
    return (
      <div>
        <h2>eMIB Sample</h2>
        {this.state.curPage === PAGES.welcome && <p>Welcome to the eMIB Sample Test</p>}
        {this.state.curPage === PAGES.howTo && <HowTo />}
        {this.state.curPage === PAGES.background && <Background />}
        {this.state.curPage === PAGES.inbox && <Inbox />}
        {this.state.curPage === PAGES.confirm && <Confirmation />}

        {this.state.curPage !== PAGES.confirm && (
          <a href onClick={this.changePage}>
            <div>Next</div>
          </a>
        )}
      </div>
    );
  }
}

export default Emib;
export { PAGES };
