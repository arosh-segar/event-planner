import React from 'react';

import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Events from './Event/Events';
import {Image, Button, Center, NativeBaseProvider,Text } from "native-base"



function Home({navigation}) {
  return (
      <NativeBaseProvider>
        <Center flex={1}>
      <Button   onPress={() => navigation.navigate("Events")}>
        <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}

            alt="Alternate Text"
            size={"lg"}
        />
        <Text>Events</Text></Button>
            <Button   onPress={() => navigation.navigate("Events")}>
                <Image
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}

                    alt="Alternate Text"
                    size={"lg"}
                />
                <Text>Guests</Text></Button>
            <Button   onPress={() => navigation.navigate("Events")}>
            <Image
                source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}

                alt="Alternate Text"
                size={"lg"}
            />
            <Text>TO-Do List</Text></Button>
            <Button   onPress={() => navigation.navigate("Events")}>
                <Image
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}

                    alt="Alternate Text"
                    size={"lg"}
                />
                <Text>SHOPPING LIST</Text></Button>

            </Center>
              </NativeBaseProvider>

)};
export default Home;
