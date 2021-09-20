import React from 'react';
import {StyleSheet, View, ScrollView,Alert} from 'react-native';
import Guest from './Guest';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import FAB from "react-native-fab";
import { Box, Center, CheckIcon, HStack, Input, Select, VStack ,Text} from "native-base";
import MaterialChip from "react-native-material-chip";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


class Guests extends React.Component{


  render() {

    const {navigation} = this.props

    return (
      <NativeBaseProvider>
        <Center h="100%">
          <HStack w={"90%"} h={"10%"}>
            <ScrollView
              horizontal={true}
            >
              <HStack space={3}>
              <Center border={3} borderRadius={20} height={"65%"} borderColor='lightBlue.600'>
                <Text px={25} color={'lightBlue.600'} fontWeight={700}>ALL</Text>
              </Center>
              <Center border={0} borderRadius={20} height={"65%"} borderColor='lightBlue.600' bg={"lightBlue.600"}>
                <Text px={25} color={'#ffff'} fontWeight={700}>ALL</Text>
              </Center>
              <Center border={3} borderRadius={20} height={"65%"} borderColor='lightBlue.600'>
                <Text px={25} color={'lightBlue.600'} fontWeight={700}>ALL</Text>
              </Center>
              <Center border={3} borderRadius={20} height={"65%"} borderColor='lightBlue.600'>
                <Text px={25} color={'lightBlue.600'} fontWeight={700}>ALL</Text>
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
          <VStack w="100%" h="70%">
            <ScrollView>
              <Guest/>
              <Guest/>
              <Guest/>
              <Guest/>
              <Guest/>
              <Guest/>
              <Guest/>
            </ScrollView>
          </VStack>
          <FAB
            buttonColor="blue"
            iconTextColor="#FFFFFF"
            onClickAction={() => {navigation.navigate("AddGuest")}}
            visible={true}
          />
        </Center>
      </NativeBaseProvider>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 75,
    marginLeft: 19
  },
  rect: {
    top: 0,
    width: 375,
    height: 84,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0
  },
  scrollArea1: {
    top: hp('10%'),
    width: 405,
    height: 404,
    position: "absolute",
    left: 0
  },
  scrollArea1_contentContainerStyle: {
    height: 84,
    width: 375
  },
  rectStack: {
    width: 375,
    height: 165
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 75,
    marginTop: 143
  },
  rectStackRow: {
    height: 186,
    flexDirection: "row",
    marginTop: 7,
    marginRight: -115
  },
  chip:{
    width:100,
  }});

export default Guests
