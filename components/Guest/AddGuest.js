import React, { Component } from "react";

import { Select,
  VStack,  HStack, Checkbox,
  CheckIcon,Button, Center,NativeBaseProvider,Input,Radio,Text,Flex } from 'native-base';
import {ImageBackground, StyleSheet} from "react-native";


function AddGuest(props) {
  return (
    <NativeBaseProvider>
        <ImageBackground
            hp={'100%'}
            wp={'100%'}
            source={require('../ImageBackground/image/bgl90.jpg')}
            resizeMode="cover"
            style={styles.image}>
      <Center mt={10}>
        <Input w="90%" mx={3} mb={5} placeholder="Guest Name" borderColor='lightBlue.600'
               _light={{
                 placeholderTextColor: "blueGray.400",
               }}
               _dark={{
                 placeholderTextColor: "blueGray.50",
               }}
        />
        <Input w="90%" mx={3} mb={5} placeholder="Age" borderColor='lightBlue.600'
               _light={{
                 placeholderTextColor: "blueGray.400",
               }}
               _dark={{
                 placeholderTextColor: "blueGray.50",
               }}
        />
        <VStack alignItems="center" space={4} mb={5}>
          <Select borderColor='lightBlue.600'

                  minWidth={"90%"}
                  accessibilityLabel="Select your favorite programming language"
                  placeholder="Gender"

                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}

                  _selectedItem={{
                    bg: "blueGray.400",
                    endIcon: <CheckIcon size={4} />,
                  }}
          >
            <Select.Item label="Male" value="js" />
            <Select.Item label="Female" value="ts" />

          </Select>
        </VStack>
        <Input w="90%" mx={3} mb={5} placeholder="Email" borderColor='lightBlue.600'
               _light={{
                 placeholderTextColor: "blueGray.400",
               }}
               _dark={{
                 placeholderTextColor: "blueGray.50",
               }}
        />
      </Center>
      <Text fontSize="lg" ml={6} bold color="#0284c7">Food Preference</Text>

      <Radio.Group
        defaultValue="1"
        name="exampleGroup"
        accessibilityLabel="favorite colorscheme"
        ml={6}


      >
        <Flex
          w="90%"

          direction="row"

        >

          <Radio colorScheme="emerald" value="1" my={1} w="60%">
              <Text  color="#0284c7">
                  VEGETARIAN
              </Text>
          </Radio>
          <Radio colorScheme="secondary" value="2" my={2} w="60%">
              <Text  color="#0284c7">
                  NON-VEG
              </Text>
          </Radio>
        </Flex>
      </Radio.Group>

      <Text fontSize="lg" ml={6} bold color="#0284c7">Status</Text>
      <HStack space={20} ml={6} mt={2}>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" ><Text  color="#0284c7">
            INVITED
        </Text></Checkbox>
        <Checkbox
          value="test"
          accessibilityLabel="This is a dummy checkbox"
          defaultIsChecked

        ><Text  color="#0284c7">
            ATTENDING
        </Text></Checkbox>
      </HStack>
      <Center mt={5}>
          <Button w="90%" variant={'solid'} size="lg" border={2}
                  borderColor="lightBlue.600" bg="#ffff">

              <Text  color="#0284c7">
                  SAVE
              </Text></Button>
      </Center>
        </ImageBackground>
    </NativeBaseProvider>


  );
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    }


});

export default AddGuest;
