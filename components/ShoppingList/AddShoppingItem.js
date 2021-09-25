import React, {Component} from 'react';

import {
  Select,
  VStack,
  HStack,
  Checkbox,
  CheckIcon,
  Button,
  Center,
  NativeBaseProvider,
  Input,
  Radio,
  Text,
  Flex,
} from 'native-base';

function AddShoppingItem(props) {
  return (
    <NativeBaseProvider>
      <Center mt={10}>
        <Input
          w="90%"
          mx={3}
          mb={5}
          placeholder="Item Name"
          borderColor="lightBlue.600"
          _light={{placeholderTextColor: 'blueGray.400'}}
          _dark={{placeholderTextColor: 'blueGray.50'}}
        />

        <Input
          w="90%"
          mx={3}
          mb={5}
          placeholder="Item Quantity"
          borderColor="lightBlue.600"
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />

        <Input
          w="90%"
          mx={3}
          mb={5}
          placeholder="Price per Quantity"
          borderColor="lightBlue.600"
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />

        <Text fontSize="lg" mt={5} mx={3} mb={4} w={'90%'} bold>
          Status
        </Text>
        <HStack space={20} mb={10} w={'90%'}>
          <Checkbox value="purchased" accessibilityLabel="purchased">
            purchased
          </Checkbox>
        </HStack>
      </Center>

      <Center mt={5}>
        <Button variant={'solid'} w="90%" bg="lightBlue.600">
          Save
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default AddShoppingItem;
