import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {  Text, NativeBaseProvider, Box, useMediaQuery} from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
function Guest(){


  return(
    <NativeBaseProvider>

      <Box
        bg="white"
        shadow={2}
        rounded="lg"
        minWidth="80%"
        h={20}
        mb={5}
        ml={5}
        bg="#0284c7"

      >


        <Text color="#FFFFFF"  mb={3} mt={3} ml={3} >
          Event
        </Text>
        <Text color="#FFFFFF" ml={3}>
          Venue
        </Text>
        <FontAwesomeIcon icon={faEllipsisV} color={"white"} style={{left:350,bottom:60}}/>

      </Box>

    </NativeBaseProvider>

  )

}



export default Guest
