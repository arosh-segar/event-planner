import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {  Text, NativeBaseProvider, Box, useMediaQuery} from "native-base";
function Guest(){


  return(
      <NativeBaseProvider>

      <Box
          bg="white"
          shadow={2}
          rounded="lg"
          maxWidth="80%"
          h={20}
          mb={5}
          ml={5}
          bg="#0284c7"

      >



        <Text color="#FFFFFF"  mb={3} mt={3} ml={3} >
          Sabesan
        </Text>
        <Text color="#FFFFFF" ml={3}>
          Attending
        </Text>

      </Box>

        </NativeBaseProvider>

  )

}



export default Guest
