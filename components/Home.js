import React from 'react';

import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Events from './Event/Events';
import {Image, Button, Center, NativeBaseProvider,Text } from "native-base"
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCalendar,faUsers,faClipboardList,faShoppingCart} from '@fortawesome/free-solid-svg-icons'


function Home({navigation}) {
  return (
      <NativeBaseProvider>
        <Center flex={1} >
      <Button   onPress={() => navigation.navigate("Events")} mt={7} bg="#0284c7" maxWidth="30%" maxHeight="25%" >
          <FontAwesomeIcon
          icon={faCalendar}
          color="#FFFFFF"
          size={60}
          />
        <Text color="#FFFFFF" ml={2}>EVENTS</Text></Button>
            <Button   onPress={() => navigation.navigate("Guests")} bg="#0284c7" maxWidth="30%" maxHeight="25%">
                <FontAwesomeIcon
                    icon={faUsers}
                    color="#FFFFFF"
                    size={60}
                />
                <Text color="#FFFFFF" ml={2}>GUESTS</Text></Button>
            <Button   onPress={() => navigation.navigate("To Do List")} bg="#0284c7" maxWidth="33%" maxHeight="20%"  >
                <FontAwesomeIcon
                    icon={faClipboardList}
                    color="#FFFFFF"
                    size={60}
                />
            <Text color="#FFFFFF" ml={2}>TO-Do LIST</Text></Button>
            <Button   onPress={() => navigation.navigate("Events")} bg="#0284c7" maxWidth="30%" maxHeight="25%">
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="#FFFFFF"
                    size={60}
                />

                <Text color="#FFFFFF" ml={2}>SHOPPING LIST</Text> </Button>

            </Center>
              </NativeBaseProvider>

)};
export default Home;
