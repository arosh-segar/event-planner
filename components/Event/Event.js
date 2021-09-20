import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {
  Text,
  NativeBaseProvider,
  Box,
  VStack,
  useMediaQuery,
  Center,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
function Guest() {
  return (
    <NativeBaseProvider>
      <Center>
        <Box bg="#0284c7" shadow={2} rounded="lg" w="90%" h={20} mb={5}>
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Event
          </Text>
          <Text color="#FFFFFF" ml={3}>
            Venue
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
