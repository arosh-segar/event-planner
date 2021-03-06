import React from 'react';
import {Button, Modal} from 'native-base';

function DeleteItemModal(props) {
  const {showModal, setShowModal, closeTask, name} = props;
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Delete Item</Modal.Header>
          <Modal.Body>Are you sure you want to delete {`${name}?`}</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  closeTask(name);
                }}>
                Yes
              </Button>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                No
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default DeleteItemModal;
