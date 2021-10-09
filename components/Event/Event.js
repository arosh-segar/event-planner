import React, {useState} from 'react';
import {
  Text,
  NativeBaseProvider,
  Box,
  VStack,
  Collapse,
  Button,
  Center,
  Flex,
  Image,
  SlideFade,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DeleteItemModal from '../modals/DeleteItemModal';

function Event(props) {
  const {name, type, venue, estimatedBudget, date, time} = props.event;
  const deleteEventByName = props.deleteEventByName;
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <NativeBaseProvider>
      <Center>
        <Box
          backgroundColor="#0284c7"
          shadow={2}
          rounded="lg"
          overflow="hidden"
          w="90%"
          mb={5}>
          <Flex direction="row">
            {type === 'wedding' && !isOpen ? (
              <VStack w="25%" p="2%" bg="white">
                <Image
                  source={require('../ImageBackground/image/wedding-icon.png')}
                  alt="Alternate Text"
                  w="100%"
                  h="100%"
                />
              </VStack>
            ) : type === 'birthday' && !isOpen ? (
              <VStack w="25%" p="2%" bg="white">
                <Image
                  source={require('../ImageBackground/image/birthday-icon.png')}
                  alt="Alternate Text"
                  w="100%"
                  h="100%"
                />
              </VStack>
            ) : (
              type === 'party' &&
              !isOpen && (
                <VStack w="25%" p="2%" bg="white">
                  <Image
                    source={require('../ImageBackground/image/party-icon.png')}
                    alt="Alternate Text"
                    w="100%"
                    h="100%"
                  />
                </VStack>
              )
            )}
            <VStack w="63%">
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Event Name : {name}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Date : {date}
              </Text>
            </VStack>
          </Flex>
          <Collapse isOpen={isOpen}>
            <SlideFade in={isOpen}>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Type : {type}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Venue : {venue}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Time : {time}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Budget : {estimatedBudget}
              </Text>
              <Button
                rounded="none"
                bg="#fc1f0f"
                onPress={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faTrash} color={'white'} />
              </Button>
            </SlideFade>
          </Collapse>
          <VStack position="absolute" right="5%" top="40%">
            <Text onPress={() => setIsOpen(!isOpen)} ml={3}>
              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                color={'white'}
              />
            </Text>
          </VStack>
          <DeleteItemModal
            showModal={showModal}
            setShowModal={setShowModal}
            deleteItem={deleteEventByName}
            name={name}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default Event;
