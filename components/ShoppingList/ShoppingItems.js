import React from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import ShoppingItem from './ShoppingItem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FAB from 'react-native-fab';

import {
  Box,
  Center,
  CheckIcon,
  HStack,
  Input,
  Select,
  VStack,
  Text,
} from 'native-base';
import MaterialChip from 'react-native-material-chip';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingItems: [],
    };
  }
  componentDidMount = () => {
    this.getShoppingItems();
  };
  getShoppingItems = async () => {
    const result = await AsyncStorage.getItem('shoppingItems');
    if (result !== null) {
      this.setState({shoppingItems: JSON.parse(result)});
    }
  };

  addShoppingItem = async shoppingItem => {
    const updatedShoppingItems = [...this.state.shoppingItems, shoppingItem];
    this.setState({shoppingItems: updatedShoppingItems});
    await AsyncStorage.setItem(
      'shoppingItems',
      JSON.stringify(updatedShoppingItems),
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <NativeBaseProvider>
        <ImageBackground
          hp={'100%'}
          wp={'100%'}
          source={require('../ImageBackground/image/bgl90.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Center h="100%">
            <HStack w={'90%'} h={'10%'}>
              <ScrollView horizontal={true}>
                <HStack space={3}>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      EVENT1
                    </Text>
                  </Center>
                  <Center
                    border={0}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600"
                    bg={'lightBlue.600'}>
                    <Text px={25} color={'#ffff'} fontWeight={700}>
                      EVENT2
                    </Text>
                  </Center>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      EVENT3
                    </Text>
                  </Center>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      EVENT4
                    </Text>
                  </Center>
                </HStack>
              </ScrollView>
            </HStack>

            <VStack w="100%" h="70%">
              <ScrollView>
                {this.state.shoppingItems.map((shoppingItem, index) => (
                  <ShoppingItem key={index} shoppingItem={shoppingItem} />
                ))}
              </ScrollView>
              <FAB
                buttonColor="#FFFFFF"
                iconTextColor="#0D6E92"
                onClickAction={() => {
                  navigation.navigate('AddShoppingItem');
                  navigation.navigate('AddShoppingItem', {
                    addShoppingItem: this.addShoppingItem,
                  });
                  // this.props.navigation.navigate('AddShoppingItem', {
                  //   addShoppingItem: this.addShoppingItem,
                  // });
                }}
                visible={true}
              />
            </VStack>

            <HStack w={'90%'} h={'10%'} mt={8}>
              <HStack space={3}>
                <Center height={'65%'}>
                  <Text color="#0D6E92" fontSize="2xl" ml={0} bold>
                    TOTAL
                  </Text>
                  <Text color="#0D6E92" fontSize="lg" ml={1}>
                    100000.00
                  </Text>
                </Center>
                <Center height={'65%'}>
                  <Text color="#0D6E92" fontSize="2xl" ml={6} bold>
                    SPENT
                  </Text>
                  <Text color="#0D6E92" fontSize="lg" ml={7}>
                    50000.00
                  </Text>
                </Center>
                <Center height={'65%'}>
                  <Text color="#0D6E92" fontSize="2xl" ml={4} bold>
                    REMAINING
                  </Text>
                  <Text color="#0D6E92" fontSize="lg" ml={0}>
                    50000.00
                  </Text>
                </Center>
              </HStack>
            </HStack>
          </Center>
        </ImageBackground>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    marginTop: 75,
    marginLeft: 19,
  },
  rect: {
    top: 0,
    width: 375,
    height: 84,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    left: 0,
  },
  scrollArea1: {
    top: hp('10%'),
    width: 405,
    height: 404,
    position: 'absolute',
    left: 0,
  },
  scrollArea1_contentContainerStyle: {
    height: 84,
    width: 375,
  },
  rectStack: {
    width: 375,
    height: 165,
  },
  icon2: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    marginLeft: 75,
    marginTop: 143,
  },
  rectStackRow: {
    height: 186,
    flexDirection: 'row',
    marginTop: 7,
    marginRight: -115,
  },
  chip: {
    width: 100,
  },
});

export default ShoppingItems;
