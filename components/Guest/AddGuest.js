import React, {useState} from 'react';
import {ScrollView, ImageBackground, StyleSheet} from 'react-native';
import {
  Select,
  VStack,
  HStack,
  Checkbox,
  CheckIcon,
  Button,
  Center,
  NativeBaseProvider,
  Input,
  Radio,
  Text,
  Flex,
} from 'native-base';

function AddGuest(route) {
  const {addGuests} = route.route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [foodPreference, setFoodPreference] = useState('Vegetarian');
  const [status, setStatus] = useState('Invited');

  const handleSubmit = () => {
    const guest = {
      name,
      age,
      gender,
      email,
      foodPreference,
      status,
    };
    addGuests(guest);
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('../ImageBackground/image/bg.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Center mt={10}>
          <Input
            w="90%"
            mx={3}
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
              <Select.Item label="Male" value="js" />
              <Select.Item label="Female" value="ts" />
            </Select>
          </VStack>
          <Input
            w="90%"
            mx={3}
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
        <Text fontSize="lg" ml={6} bold>
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
            <Radio colorScheme="emerald" value="Vegetarian" my={1} w="60%">
              Vegetarian
            </Radio>
            <Radio colorScheme="secondary" value="Non-Veg" my={2} w="50%">
              Non-Veg
            </Radio>
          </Flex>
        </Radio.Group>

        <Text fontSize="lg" ml={6} bold>
          Status
        </Text>

        <Radio.Group
          defaultValue="invited"
          onChange={statusInput => setStatus(statusInput)}
          name="exampleGroup"
          accessibilityLabel="favorite colorscheme"
          ml={6}>
          <Flex w="90%" direction="row">
            <Radio colorScheme="emerald" value="Invited" my={1} w="53%">
              Invited
            </Radio>
            <Radio colorScheme="secondary" value="Attending" my={2} w="53%">
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
    }


});

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

export default AddGuest;
