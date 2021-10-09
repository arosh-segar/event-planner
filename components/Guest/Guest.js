import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {
  Text,
  NativeBaseProvider,
  Box,
  Collapse,
  useMediaQuery,
  SlideFade,
  Button,
  Center,
  VStack,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DeleteItemModal from '../modals/DeleteItemModal';

function Guest(props) {
  const {name, age, gender, email, foodPreference, status} = props.guest;
  const deleteGuestByName = props.deleteGuestByName;
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
      <Center>
        <Box shadow={2} rounded="lg" minWidth="90%" mb={5} bg="#0284c7">
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Guest Name : {name}
          </Text>
          <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
            Status : {status}
          </Text>
          <Collapse isOpen={isOpen}>
            <SlideFade in={isOpen}>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Age : {age}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Gender : {gender}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Email : {email}
              </Text>
              <Text color="#FFFFFF" mb={3} mt={3} ml={3}>
                Budget : {foodPreference}
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
            deleteItem={deleteGuestByName}
            name={name}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default Guest;
