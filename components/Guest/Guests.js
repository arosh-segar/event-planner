import React from 'react';
import {StyleSheet, View, Text, ScrollView,Alert} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Guest from './Guest';
import { FloatingAction } from "react-native-floating-action";
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {NativeBaseProvider, Center, VStack, Input} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class Guests extends React.Component{


  render() {

    const {navigation} = this.props

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
                <Guest />
                <Guest />
                <Guest />
                <Guest />
                <Guest />
                <Guest />
                <Guest />
                <Guest />
              </ScrollView>
            </VStack>
            <FloatingAction
                showBackground={false}
                animated={false}
                onPressMain={() => {
                  navigation.navigate('AddGuest');
                }}
            />
          </Center>
        </NativeBaseProvider>
    )
  }


}


export default Guests
