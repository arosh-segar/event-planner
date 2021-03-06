import React from 'react';
import {
  Button,
  Modal,
  Text,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {useState} from 'react';

function CompleteTaskModal(props) {
  const {showModal, setShowModal, closeTask, name} = props;
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Complete Task</Modal.Header>
          <Modal.Body>Are you sure you want to mark it as completed?</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  closeTask(name);
                  setShowModal(false);
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

export default CompleteTaskModal;
