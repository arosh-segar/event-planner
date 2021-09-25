import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Events from './Event/Events';
import ShoppingItems from './ShoppingList/ShoppingItems';
import {
  Image,
  Button,
  Center,
  NativeBaseProvider,
  Text,
  Flex,
  VStack,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faUsers,
  faClipboardList,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {ImageBackground, StyleSheet, View} from 'react-native';

function Home({navigation}) {
  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('./ImageBackground/image/bg.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Center h="100%">
          <Flex
            w="90%"
            h="25%"
            direction="row"
            alignItems="center"
            justifyContent="center">
            <Button
              borderRadius={15}
              border={2}
              borderColor="lightBlue.600"
              shadow={5}
              onPress={() => navigation.navigate('Events')}
              w="45%"
              h="100%"
              bg="#FFFFFF">
              <Center>
                <FontAwesomeIcon icon={faCalendar} color="#0284c7" size={58} />
                <Text mt="50%" color="#0284c7">
                  EVENTS
                </Text>
              </Center>
            </Button>
            <VStack w="5%" />
            <Button
              borderRadius={15}
              w="45%"
              h="100%"
              onPress={() => navigation.navigate('Guests')}
              bg="#0284c7">
              <Center>
                <FontAwesomeIcon icon={faUsers} color="#FFFFFF" size={65} />
                <Text mt="35%" color="#FFFFFF">
                  GUESTS
                </Text>
              </Center>
            </Button>
          </Flex>
          <Flex
            w="90%"
            mt="5%"
            h="25%"
            direction="row"
            alignItems="center"
            justifyContent="center">
            <Button
              borderRadius={15}
              w="45%"
              h="100%"
              onPress={() => navigation.navigate('To Do List')}
              bg="#0284c7">
              <Center>
                <FontAwesomeIcon
                  icon={faClipboardList}
                  color="#FFFFFF"
                  size={55}
                />
                <Text mt="30%" color="#FFFFFF">
                  TO-DO LIST
                </Text>
              </Center>
            </Button>
            <VStack w="5%" />
            <Button
              borderRadius={15}
              w="45%"
              h="100%"
              onPress={() => navigation.navigate('Shopping List')}
              bg="#0284c7">
              <Center>
                <FontAwesomeIcon
                  marginTop="20%"
                  icon={faShoppingCart}
                  color="#FFFFFF"
                  size={55}
                />
                <Text mt="20%" color="#FFFFFF">
                  SHOPPING LIST
                </Text>{' '}
              </Center>
            </Button>
          </Flex>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default Home;
