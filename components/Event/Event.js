import React, {useState} from 'react';
import {
  Text,
  NativeBaseProvider,
  Box,
  VStack,
  Collapse,
  useMediaQuery,
  Button,
  Center,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
function Event(props) {
  const {name, type, venue, estimatedBudget, date, time} = props.event;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NativeBaseProvider>
      <Center>
        <Box backgroundColor="#0284c7" shadow={2} rounded="lg" w="90%" mb={5}>
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Event Name : {name}
          </Text>
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Date : {date}
          </Text>
          <Collapse isOpen={isOpen}>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Type : {type}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Venue : {venue}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Time : {time}
            </Text>
            <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
              Budget : {estimatedBudget}
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

export default Event;
