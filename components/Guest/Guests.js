import React from 'react';
import {StyleSheet, ScrollView, ImageBackground} from 'react-native';
import Guest from './Guest';
import FAB from 'react-native-fab';
import {Center, HStack, Input, VStack, Text} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-community/async-storage';


class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      search: '',
    };
  }

  componentDidMount = () => {
    this.getGuests();
  };

  getGuests = async () => {
    const result = await AsyncStorage.getItem('guests');
    if (result !== null) {
      this.setState({guests: JSON.parse(result)});
    }
  };

  deleteGuestByName = async name => {
    this.setState({
      guests: this.state.guests.filter(guest => guest.name !== name),
    });
    await AsyncStorage.setItem('guests', JSON.stringify(this.state.guests));
  };

  addGuests = async guest => {
    const updatedGuests = [...this.state.guests, guest];
    this.setState({guests: updatedGuests});
    await AsyncStorage.setItem('guests', JSON.stringify(updatedGuests));
  };
  render() {
    const {navigation} = this.props;

    return (
      <NativeBaseProvider>
        <ImageBackground
          hp={'100%'}
          wp={'100%'}
          source={require('../ImageBackground/image/bg.jpg')}
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
                      ALL
                    </Text>
                  </Center>
                  <Center
                    border={0}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600"
                    bg={'lightBlue.600'}>
                    <Text px={25} color={'#ffff'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                </HStack>
              </ScrollView>
            </HStack>
            <VStack w="90%" mt="5" mx={3} mb="4%">
              <VStack position="absolute" top="35%" left="5%">
                <FontAwesomeIcon icon={faSearch} color={'#94a3b8'} size={18} />
              </VStack>
              <Input
                textAlign="center"
                placeholder="Search Guest"
                onChangeText={searchInput => {
                  this.setState({search: searchInput});
                }}
                borderColor="lightBlue.600"
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </VStack>
            <VStack w="100%" h="70%">
              <ScrollView>
                {this.state.guests.map((guest, index) => (
                  <>
                    {guest.name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase()) && (
                      <Guest
                        key={index}
                        guest={guest}
                        deleteGuestByName={this.deleteGuestByName}
                      />
                    )}
                  </>
                ))}
              </ScrollView>
            </VStack>
            <FAB
              buttonColor="#FFFFFF"
              iconTextColor="#0D6E92"
              onClickAction={() => {
                navigation.navigate('AddGuest');
                navigation.navigate('AddGuest', {addGuests: this.addGuests});
              }}
              visible={true}
            />
          </Center>
        </ImageBackground>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

export default Guests;
