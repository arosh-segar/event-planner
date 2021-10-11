import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Select,
  VStack,
  CheckIcon,
  Button,
  Center,
  NativeBaseProvider,
  Input,
  Radio,
  Text,
  Flex,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import ErrorModal from '../modals/ErrorModal';

function AddGuest(route) {
  const {addGuests} = route.route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');
  const [foodPreference, setFoodPreference] = useState('Vegetarian');
  const [status, setStatus] = useState('Invited');
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getEvents();
  });

  const getEvents = async () => {
    const result = await AsyncStorage.getItem('events');
    if (result !== null) {
      setEvents(JSON.parse(result));
    }
  };

  const validateFields = () => {
    let isValid = true;
    if (
      !name ||
      !age ||
      !gender ||
      !email ||
      !event ||
      !foodPreference ||
      !status ||
      !events
    ) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      const guest = {
        name,
        age,
        gender,
        email,
        event,
        foodPreference,
        status,
      };
      addGuests(guest);
    } else {
      setShowModal(true);
    }
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('../ImageBackground/image/bg-1.png')}
        resizeMode="cover"
        style={styles.image}>
        <Center>
          <Input
            w="90%"
            mx={3}
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Guest Name"
            onChangeText={nameInput => setName(nameInput)}
            defaultValue={name}
            borderColor="lightBlue.600"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <Input
            w="90%"
            mx={3}
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Age"
            onChangeText={ageInput => setAge(ageInput)}
            defaultValue={age}
            borderColor="lightBlue.600"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <VStack alignItems="center" space={4} mb={5}>
            <Select
              bg={'#FFFFFF'}
              borderColor="lightBlue.600"
              minWidth={'90%'}
              onValueChange={genderInput => setGender(genderInput)}
              accessibilityLabel="Select your favorite programming language"
              placeholder="Gender"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
              _selectedItem={{
                bg: 'blueGray.400',
                endIcon: <CheckIcon size={4} />,
              }}>
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Female" value="Female" />
            </Select>
          </VStack>
          <Input
            w="90%"
            mx={3}
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Email"
            onChangeText={emailInput => setEmail(emailInput)}
            defaultValue={email}
            borderColor="lightBlue.600"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </Center>
        <VStack alignItems="center" space={4} mb={5}>
          <Select
            borderColor="lightBlue.600"
            minWidth="90%"
            bg={'#FFFFFF'}
            accessibilityLabel="Select your favorite programming language"
            onValueChange={eventInput => setEvent(eventInput)}
            placeholder="Event Name"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
            _selectedItem={{
              bg: 'blueGray.400',
              endIcon: <CheckIcon size={4} />,
            }}>
            <Select.Item label="Kane's 11th" value="Kane's 11th" />
            <Select.Item label="Norma's Party" value="Norma's Party" />
            <Select.Item label="Event 3" value="Event 3" />
            <Select.Item label="David's Birthday" value="David's Birthday" />
          </Select>
        </VStack>
        <Text fontSize="lg" ml={6} mb={2} bold>
          Food Preference
        </Text>
        <Radio.Group
          defaultValue="vegetarian"
          onChange={foodPreferenceInput =>
            setFoodPreference(foodPreferenceInput)
          }
          name="exampleGroup"
          accessibilityLabel="favorite colorscheme"
          ml={6}>
          <Flex w="90%" direction="row">
            <Radio colorScheme="primary" value="Vegetarian" w="57%">
              Vegetarian
            </Radio>
            <Radio colorScheme="primary" value="Non-Veg" w="55%">
              Non-Veg
            </Radio>
          </Flex>
        </Radio.Group>
        <Text fontSize="lg" ml={6} mb={2} bold>
          Status
        </Text>
        <Radio.Group
          defaultValue="invited"
          direction="row"
          w="90%"
          onChange={statusInput => setStatus(statusInput)}
          name="exampleGroup"
          accessibilityLabel="favorite colorscheme"
          ml={6}>
          <Flex direction="row">
            <Radio colorScheme="primary" value="Invited" w="50%">
              Invited
            </Radio>
            <Radio colorScheme="primary" value="Attending" w="62%">
              Attending
            </Radio>
          </Flex>
        </Radio.Group>

        <Center mt={5}>
          <Button
            onPress={handleSubmit}
            variant={'solid'}
            w="90%"
            bg="lightBlue.600">
            Save
          </Button>
        </Center>
        <ErrorModal showModal={showModal} setShowModal={setShowModal} />
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
  },
});

export default AddGuest;
