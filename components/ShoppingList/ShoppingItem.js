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

function ShoppingItem() {
  return (
    <NativeBaseProvider>
      <Center>
        <Box shadow={2} rounded="lg" minWidth="90%" h={24} mb={5} bg="#0284c7">
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Fruits
          </Text>
          <Text color="#FFFFFF" ml={3}>
            Purchased
          </Text>
          <Text color="#FFFFFF" ml={3}>
            1000.00
          </Text>
          <VStack position="absolute" right="5%" top="40%">
            <FontAwesomeIcon icon={faEllipsisV} color={'white'} />
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default ShoppingItem;
