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
import {ImageBackground, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function AddShoppingItem(props) {
  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('../ImageBackground/image/bg.jpg')}
        resizeMode="cover"
        style={styles.image}>
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

          <Text
            fontSize="lg"
            mt={5}
            mx={3}
            mb={4}
            w={'90%'}
            color="#0D6E92"
            bold>
            Status
          </Text>
          <HStack space={20} mb={10} w={'90%'}>
            <Checkbox
              value="purchased"
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
            border={2}
            borderColor="lightBlue.600"
            bg="#ffff">
            <Text color="#0284c7">SAVE</Text>
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
