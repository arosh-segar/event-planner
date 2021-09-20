import React, {useState} from 'react';
import {
  Text,
  NativeBaseProvider,
  Box,
  VStack,
  useMediaQuery,
  Button,
  Center,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
function Guest() {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  return (
    <NativeBaseProvider>
      <Center>
        <Box
          backgroundColor="#0284c7"
          shadow={2}
          rounded="lg"
          w="90%"
          h={20}
          mb={5}>
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Event
          </Text>
          <Text color="#FFFFFF" ml={3}>
            Venue
          </Text>
          <VStack position="absolute" right="5%" top="40%">
            <Text onPress={() => setIsOptionOpen(!isOptionOpen)} ml={3}>
              <FontAwesomeIcon icon={faEllipsisV} color={'white'} />
            </Text>
          </VStack>
          {isOptionOpen && (
            <VStack
              w="30%"
              backgroundColor="white"
              position="absolute"
              top="2.5%"
              right="15%">
              <Button
                w="100%"
                variant={'solid'}
                size="sm"
                backgroundColor="transparent">
                <Text color="black">Edit</Text>
              </Button>
              <Button
                w="100%"
                borderRadius={0}
                variant={'solid'}
                size="sm"
                backgroundColor="transparent">
                <Text w="100%" color="black">
                  Delete
                </Text>
              </Button>
            </VStack>
          )}
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default Guest;
