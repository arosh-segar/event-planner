import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import { Text, NativeBaseProvider, Box, useMediaQuery, Center} from "native-base";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
function Guest(){


  return(
    <NativeBaseProvider>
      <Center flex={1}>
      <Box
        bg="white"
        shadow={2}
        rounded="lg"
        minWidth="95%"
        height={"90%"}
        mt={5}
        mb={5}
        bg="#0284c7"
      >

        <Text color="#FFFFFF"  mb={1} mt={4} ml={3}>
          Task
        </Text>
        <Text color="#FFFFFF"  mb={1} mt={1} ml={3}  >
          Event
        </Text>
        <Text color="#FFFFFF" mb={1} mt={1} ml={3}>
          Medium
        </Text>
        <Text color="#FFFFFF" mb={1} mt={1} ml={3}>
          Doing
        </Text>
        <FontAwesomeIcon icon={faEllipsisV} color={"white"} style={{left:350,bottom:60}}/>

      </Box>
      </Center>
    </NativeBaseProvider>

  )

}



export default Guest
