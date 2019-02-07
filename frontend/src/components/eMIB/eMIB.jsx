import React, { Component } from "react";

const PAGES = {
  welcome: "welcome",
  email_instr: "email_instr",
  task_instr: "task_instr"
};

class eMIB extends Component {
  state = {
    curPage: PAGES.welcome
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.welcome:
        this.setState({ curPage: PAGES.email_instr });
        break;
      case PAGES.email_instr:
        this.setState({ curPage: PAGES.task_instr });
        break;
      case PAGES.task_instr:
        this.setState({ curPage: PAGES.welcome });
        break;
      default:
        this.setState({ curPage: PAGES.email_instr });
        break;
    }
  };

  render() {
    return (
      <div>
        <h2>eMIB Sample</h2>
        {this.state.curPage === PAGES.welcome && <p>#1 Welcome to the eMIB Sample Test</p>}
        {this.state.curPage === PAGES.email_instr && <p>#2 Email Instructions</p>}
        {this.state.curPage === PAGES.task_instr && <p>#3 Task Instructions</p>}
        <a onClick={this.changePage}>
          <div>Next</div>
        </a>
      </div>
    );
  }
}

export default eMIB;
