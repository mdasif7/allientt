import React, { Component } from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }


  render() {
      const { modalOpen, handleClose}=this.props;
    return (
      <Modal
        open={modalOpen}
        onClose={handleClose}
        basic
        size='small'
      >
        <Header content='Search and Select an GIF' />
        <Modal.Content>
         
          {this.props.children}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={handleClose} inverted>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ModalPopup;