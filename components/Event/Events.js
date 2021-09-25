import React from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import Event from './Event';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import FAB from 'react-native-fab';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {Center, Input, VStack} from 'native-base';
import {ImageBackground} from 'react-native';

class Events extends React.Component {
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
            <VStack w="90%" mt="5" mx={3} mb="4%">
              <VStack position="absolute" top="35%" left="5%">
                <FontAwesomeIcon icon={faSearch} color={'#94a3b8'} size={18} />
              </VStack>
              <Input
                textAlign="center"
                placeholder="Search Event"
                borderColor="lightBlue.600"
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </VStack>

            <VStack w="100%" h="85%">
              <ScrollView>
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
              </ScrollView>
            </VStack>
            <FAB
              buttonColor="blue"
              iconTextColor="#FFFFFF"
              onClickAction={() => {
                navigation.navigate('AddEvent');
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
    top: 81,
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
});

export default Events;
