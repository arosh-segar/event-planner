import React, {useState} from 'react';
import {
  Text,
  NativeBaseProvider,
  Box,
  useMediaQuery,
  SlideFade,
  Button,
  Collapse,
  Center,
  VStack,
} from 'native-base';
import {
  faChevronDown,
  faChevronUp,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DeleteItemModal from '../modals/DeleteItemModal';
import CompleteTaskModal from "../modals/CompleteTaskModal";

function Guest(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {name, priority, event, notes, status, date, time} = props.task;
  const closeTask = props.closeTaskByName;
  const deleteTaskByName = props.deleteTaskByName;
  const statusColor =
    priority === 'Low'
      ? '#40ff40'
      : priority === 'Medium'
      ? '#e6d32e'
      : '#ff3d3d';

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box
          shadow={2}
          rounded="lg"
          minWidth="90%"
          mb={5}
          borderWidth={2}
          borderColor={statusColor}
          bg="#FFFFFF"
          overflow="hidden">
          <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
            Task : {name}
          </Text>
          <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
            Event : {event}
          </Text>
          <Collapse isOpen={isOpen}>
            <SlideFade in={isOpen}>
              <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
                Priority : {priority}
              </Text>
              <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
                Status: {status}
              </Text>
              <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
                Date: {date}
              </Text>
              <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
                Time: {time}
              </Text>
              <Text color="#0284c7" bold mb={3} mt={3} ml={3}>
                Notes: {notes}
              </Text>
              <Button
                disabled={status=='done'?true:false}
                rounded="none"
                bg={statusColor}
                onPress={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faCheck} color={'white'} />
              </Button>
            </SlideFade>
          </Collapse>
          <VStack position="absolute" right="5%" top="40%">
            <Text onPress={() => setIsOpen(!isOpen)} ml={3}>
              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                color={statusColor}
              />
            </Text>
          </VStack>
          <CompleteTaskModal
            showModal={showModal}
            setShowModal={setShowModal}
            closeTask={closeTask}
            name={name}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default Guest;
