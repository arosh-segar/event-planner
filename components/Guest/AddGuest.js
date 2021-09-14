import React, { Component } from "react";

import { Select,
    VStack,
    CheckIcon,Button, Center,NativeBaseProvider,Input,Radio } from 'native-base';


function AddGuest(props) {
  return (
      <NativeBaseProvider>
          <Center mt={10}>
          <Input w="90%" mx={3} mb={5} placeholder="Guest Name"
              _light={{
                  placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                  placeholderTextColor: "blueGray.50",
              }}
          />
              <Input w="90%" mx={3} mb={5} placeholder="Guest Name"
                     _light={{
                         placeholderTextColor: "blueGray.400",
                     }}
                     _dark={{
                         placeholderTextColor: "blueGray.50",
                     }}
              />
              <VStack alignItems="center" space={4} mb={5}>
                  <Select

                      minWidth={325}
                      accessibilityLabel="Select your favorite programming language"
                      placeholder="Select your age"

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
                      <Select.Item label="JavaScript" value="js" />
                      <Select.Item label="TypeScript" value="ts" />
                      <Select.Item label="C" value="c" />
                      <Select.Item label="Python" value="py" />
                      <Select.Item label="Java" value="java" />
                  </Select>
              </VStack>
              <Input w="90%" mx={3} mb={5} placeholder="Guest Name"
                     _light={{
                         placeholderTextColor: "blueGray.400",
                     }}
                     _dark={{
                         placeholderTextColor: "blueGray.50",
                     }}
              />
              <Radio.Group
                  defaultValue="1"
                  name="exampleGroup"
                  accessibilityLabel="favorite colorscheme"
                  mr={10}

              >
                  <Radio colorScheme="emerald" value="1" my={1}>
                      Invited
                  </Radio>
                  <Radio colorScheme="secondary" value="2" my={2}>
                      Attending
                  </Radio>

              </Radio.Group>

              <Button variant={"solid"} size="lg">ADD</Button>
              </Center>
          </NativeBaseProvider>


  );
}




export default AddGuest;
