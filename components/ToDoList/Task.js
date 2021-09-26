import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {
  Text,
  NativeBaseProvider,
  Box,
  useMediaQuery,
  Center,
  VStack,
} from 'native-base';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
function Guest(props) {
  const {name, priority, event, status} = props.task;
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box
          shadow={2}
          rounded="lg"
          minWidth="90%"
          height={'90%'}
          mt={5}
          mb={5}
          bg="#0284c7">
          <Text color="#FFFFFF" mb={1} mt={4} ml={3}>
            {name}
          </Text>
          <Text color="#FFFFFF" mb={1} mt={1} ml={3}>
            {event}
          </Text>
          <Text color="#FFFFFF" mb={1} mt={1} ml={3}>
            {priority}
          </Text>
          <Text color="#FFFFFF" mb={1} mt={1} ml={3}>
            {status}
          </Text>
          <VStack position="absolute" right="5%" top="40%">
            <FontAwesomeIcon icon={faEllipsisV} color={'white'} />
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default Guest;
