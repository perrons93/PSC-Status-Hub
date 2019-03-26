import React, { Component } from "react";
import PropTypes from "prop-types";
import InboxButton from "../commons/InboxButton";
import InboxEmail from "../commons/InboxEmail";

class Inbox extends Component {
  static propTypes = {
    inboxSpecs: PropTypes.array.isRequired
  };

  state = {
    currentNode: 0
  };

  render() {
    const length = this.props.inboxSpecs.length - 1;
    return (
      <div>
        <nav
          className="side-nav-grid-buttons-cell"
          //style={styles.buttonList}
          role="dialog"
          aria-label={"Inbox"}
        >
          <ul className="nav nav-tabs" /*style={styles.ul}*/ role="menubar">
            {this.props.inboxSpecs.map(email => (
              <div key={email.id}>
                {email.id === this.state.currentNode && (
                  <li /*style={styles.li}*/ aria-current="page" role="menuitem" />
                )}
                {email.id !== this.state.currentNode && (
                  <li /*style={styles.li}*/ role="menuitem">
                    <InboxButton text={email.text} />
                  </li>
                )}
              </div>
            ))}
          </ul>
        </nav>
        <div
          className="side-nav-grid-content-cell"
          /*style={styles.bodyContent}*/
          id="side-nav-grid-content-cell"
        >
          <InboxEmail text={this.props.inboxSpecs[this.state.currentNode].body} />
        </div>
      </div>
    );
  }
}

export default Inbox;
