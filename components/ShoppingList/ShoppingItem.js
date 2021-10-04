import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {
  Text,
  NativeBaseProvider,
  Box,
  useMediaQuery,
  Center,
  VStack,
  Button,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

function ShoppingItem(props) {
  const {itemName, itemQty, itemPrice, itemStatus} = props.shoppingItem;
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <NativeBaseProvider>
      <Center>
        <Box
          shadow={2}
          rounded="lg"
          minWidth="90%"
          h={24}
          mb={5}
          backgroundColor="#0284c7">
          <Text color="#000" mb={3} mt={3} ml={3}>
            {itemName}
          </Text>
          {/*<Text color="#FFFFFF" ml={3}>*/}
          {/*  {itemQty}*/}
          {/*</Text>*/}
          {/*<Text color="#FFFFFF" ml={3}>*/}
          {/*  {itemPrice}*/}
          {/*</Text>*/}
          <Text color="#FFFFFF" ml={3}>
            {itemStatus}
          </Text>
          <VStack position="absolute" right="5%" top="40%">
            <Text onPress={() => setIsOptionOpen(!isOptionOpen)} ml={3}>
              <FontAwesomeIcon icon={faEllipsisV} color={'white'} />
            </Text>
          </VStack>

          {isOptionOpen && (
            <VStack
              w="30%"
              backgroundColor="white"
              position="absolute"
              top="2.5%"
              right="15%">
              <Button
                w="100%"
                variant={'solid'}
                size="sm"
                backgroundColor="transparent">
                <Text color="black">Edit</Text>
              </Button>
              <Button
                w="100%"
                borderRadius={0}
                variant={'solid'}
                size="sm"
                backgroundColor="transparent">
                <Text w="100%" color="black">
                  Delete
                </Text>
              </Button>
            </VStack>
          )}
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default ShoppingItem;
