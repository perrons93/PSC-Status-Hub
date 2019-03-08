import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const styles = {
  boxshape: {
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderRadius: "5px 5px 5px 5px"
  },
  boxContent: {
    paddingLeft: 20,
    paddingRight: 20
  },
  modelTitle: {
    position: "absolute"
  },
  buttonsZone: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    marginLeft: 5,
    marginRight: 5
  },
  test: {
    display: "block",
    marginTop: "auto",
    marginBottom: "auto"
  }
};

class PopupBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };

    this.PropTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonOne: PropTypes.string.isRequired,
      buttonTwo: PropTypes.string.isRequired
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { title, description, buttonOne, buttonTwo } = this.props;
    return (
      <div>
        <button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div style={styles.boxContent}>
            <Modal.Header closeButton>
              <Modal.Title style={styles.modelTitle}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
              <div style={styles.buttonsZone}>
                <button
                  style={styles.button}
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.handleClose}
                >
                  {buttonOne}
                </button>
                <button
                  style={styles.button}
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleClose}
                >
                  {buttonTwo}
                </button>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PopupBox;
