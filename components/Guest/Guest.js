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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
function Guest(props) {
  const {name, status} = props.guest;
  return (
    <NativeBaseProvider>
      <Center>
        <Box
          bg="white"
          shadow={2}
          rounded="lg"
          minWidth="90%"
          h={20}
          mb={5}
          bg="#0284c7">
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            {name}
          </Text>
          <Text color="#FFFFFF" ml={3}>
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
