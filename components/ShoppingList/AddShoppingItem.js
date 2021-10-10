import React, {Component, useState, useEffect} from 'react';

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
import {ImageBackground, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function AddShoppingItem(route) {
  const {addShoppingItem} = route.route.params;
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(0.0);
  const [itemQty, setItemQty] = useState(0);
  const [itemStatus, setItemStatus] = useState('pending');
  const [event, setEvent] = useState('');

  const generateID = () => {
    return `E${Math.floor(Math.random() * 100)}`;
  };

  const handleSubmit = async () => {
    const shoppingItem = {
      itemName,
      itemQty,
      itemPrice,
      itemStatus,
      event,
    };

    addShoppingItem(shoppingItem);
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('../ImageBackground/image/bg-1.png')}
        resizeMode="cover"
        style={styles.image}>
        <Center mt={10}>
          <Select
            bg={'#FFFFFF'}
            mb={5}
            borderColor="lightBlue.600"
            minWidth="90%"
            accessibilityLabel="Select your favorite programming language"
            onValueChange={eventInput => setEvent(eventInput)}
            placeholder="Event Name"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
            _selectedItem={{
              bg: 'blueGray.400',
              endIcon: <CheckIcon size={4} />,
            }}>
            <Select.Item label="Birthday" value="Birthday" />
            <Select.Item label="Wedding" value="Wedding" />
            <Select.Item label="Batch Party" value="Batch Party" />
          </Select>

          <Input
            w="90%"
            mx={3}
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Item Name"
            borderColor="lightBlue.600"
            onChangeText={nameInput => setItemName(nameInput)}
            defaultValue={itemName}
            _light={{placeholderTextColor: 'blueGray.400'}}
            _dark={{placeholderTextColor: 'blueGray.50'}}
          />

          <Input
            w="90%"
            mx={3}
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Item Quantity"
            borderColor="lightBlue.600"
            onChangeText={qtyInput => setItemQty(qtyInput)}
            defaultValue={itemQty}
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
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Price per Quantity"
            borderColor="lightBlue.600"
            onChangeText={priceInput => setItemPrice(priceInput)}
            defaultValue={itemPrice}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />

          <Text
            fontSize="lg"
            mt={5}
            mx={3}
            bg={'#FFFFFF'}
            mb={4}
            w={'90%'}
            color="#0D6E92"
            bold>
            Status
          </Text>
          <HStack space={20} mb={10} w={'90%'}>
            <Checkbox
              defaultIsChecked="purchased"
              value="purchased"
              onChange={statusInput => setItemStatus(statusInput)}
              accessibilityLabel="purchased"
              color="#0D6E92">
              <Text
                fontSize="lg"
                mt={3}
                mx={3}
                mb={4}
                w={'90%'}
                color="#0D6E92"
                bold>
                purchased
              </Text>
            </Checkbox>
          </HStack>
        </Center>

        <Center mt={5}>
          <Button
            w="90%"
            variant={'solid'}
            size="lg"
            bg="lightBlue.600"
            onPress={handleSubmit}>
            <Text color="#FFFFFF">SAVE</Text>
          </Button>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default AddShoppingItem;
