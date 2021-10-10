import React, {useState} from 'react';

import {
  Text,
  NativeBaseProvider,
  Box,
  SlideFade,
  Collapse,
  useMediaQuery,
  Center,
  VStack,
  Button,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

function ShoppingItem(props) {
  const {itemName, itemQty, itemPrice, itemStatus, event} = props.shoppingItem;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NativeBaseProvider>
      <Center>
        <Box
          shadow={2}
          rounded="lg"
          minWidth="90%"
          mb={5}
          backgroundColor="#0284c7">
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Item Name : {itemName}
          </Text>
          {/*<Text color="#FFFFFF" ml={3}>*/}
          {/*  {itemQty}*/}
          {/*</Text>*/}
          {/*<Text color="#FFFFFF" ml={3}>*/}
          {/*  {itemPrice}*/}
          {/*</Text>*/}
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Status : {itemStatus}
          </Text>
          <Collapse isOpen={isOpen}>
            <SlideFade in={isOpen}>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Event Name : {event}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Price : {itemPrice}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Quantity : {itemQty}
              </Text>
            </SlideFade>
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

export default ShoppingItem;
