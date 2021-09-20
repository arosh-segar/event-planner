import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {NativeBaseProvider, Center, VStack, Input} from 'native-base';
import Event from './Event';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FloatingAction} from 'react-native-floating-action';

class Events extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <NativeBaseProvider>
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
          <FloatingAction
            showBackground={false}
            animated={false}
            onPressMain={() => {
              navigation.navigate('AddEvent');
            }}
          />
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Events;
