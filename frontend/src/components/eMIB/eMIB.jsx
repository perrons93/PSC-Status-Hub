import React, { Component } from "react";

class eMIB extends Component {
  state = {
    curPage: 1
  };

  changePage = () => {
    this.setState({ curPage: 2 });
  };

  render() {
    return (
      <div>
        <h2>eMIB Sample</h2>
        {this.state.curPage === 1 && <p>#1 Welcome to the eMIB Sample Test</p>}
        {this.state.curPage === 2 && <p>#2 Test Instructions</p>}
        <a onClick={this.changePage}>
          <div>Next</div>
        </a>
      </div>
    );
  }
}

export default eMIB;
