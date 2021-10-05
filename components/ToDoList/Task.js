import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {
  Text,
  NativeBaseProvider,
  Box,
  useMediaQuery,
  Collapse,
  Center,
  VStack,
} from 'native-base';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
function Guest(props) {
  const [isOpen, setIsOpen] = useState(false);
  const {name, priority, event, notes, status, date, time} = props.task;
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box shadow={2} rounded="lg" minWidth="90%" mb={5} bg="#0284c7">
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Task : {name}
          </Text>
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Event : {event}
          </Text>
          <Collapse isOpen={isOpen}>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Priority : {priority}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Status: {status}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Date: {date}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Time: {time}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Notes: {notes}
            </Text>
          </Collapse>
          <VStack position="absolute" right="5%" top="40%">
            <Text onPress={() => setIsOpen(!isOpen)} ml={3}>
              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                color={'white'}
              />
            </Text>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default Guest;
