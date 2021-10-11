import React from 'react';
import {Button, Modal} from 'native-base';

function ErrorModal(props) {
  const {showModal, setShowModal} = props;
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Error</Modal.Header>
          <Modal.Body>Please fill all the fields</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                Ok
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ErrorModal;
