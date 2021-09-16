import React, { Component } from "react";

import { Select,
    VStack,  HStack, Checkbox,
    CheckIcon,Button, Center,NativeBaseProvider,Input,Radio,Text } from 'native-base';


function AddGuest(props) {
  return (
      <NativeBaseProvider>
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

                      minWidth={325}
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

              <Radio.Group
                  defaultValue="1"
                  name="exampleGroup"
                  accessibilityLabel="favorite colorscheme"
                  ml={6}
              >
                  <Radio colorScheme="emerald" value="1" my={1}>
                      Invited
                  </Radio>
                  <Radio colorScheme="secondary" value="2" my={2}>
                      Attending
                  </Radio>

              </Radio.Group>
          <Text fontSize="lg" ml={6} bold>Status</Text>
              <HStack space={20} ml={6} mt={2}>
                  <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" >invited</Checkbox>
                  <Checkbox
                      value="test"
                      accessibilityLabel="This is a dummy checkbox"
                      defaultIsChecked
                  >Attending</Checkbox>
              </HStack>
          <Center mt={5}>
              <Button variant={"solid"} size="lg" bg="lightBlue.600" >Save</Button>
              </Center>
          </NativeBaseProvider>


  );
}




export default AddGuest;
