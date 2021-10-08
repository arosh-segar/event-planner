import React, {useState, useEffect} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Flex,
  Select,
  VStack,
  Button,
  Text,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Input,
} from 'native-base';

import {ImageBackground, StyleSheet} from 'react-native';

function AddEvent(route) {
  const {addEvents} = route.route.params;
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [venue, setVenue] = useState('');
  const [estimatedBudget, setEstimatedBudget] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  /* useEffect(() => {
    async function fetchData() {
      await getEvents();
    }
    fetchData();
  }, []); */

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDate = dateValue => {
    setDate(dateValue);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTime = timeValue => {
    setTime(timeValue);
    hideTimePicker();
  };

  const generateID = () => {
    return `E${Math.floor(Math.random() * 100)}`;
  };

  const handleSubmit = async () => {
    const event = {
      name,
      type,
      venue,
      estimatedBudget,
      date: `${date?.getDate()} / ${date?.getMonth()} / ${date?.getFullYear()}`,
      time: `${time?.getHours()} : ${time?.getMinutes()} : 00`,
    };

    addEvents(event);
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('../ImageBackground/image/bgl90.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Center mt={10}>
          <Input
            w="90%"
            mx={3}
            mb={5}
            placeholder="Event Name"
            borderColor="lightBlue.600"
            onChangeText={nameInput => setName(nameInput)}
            defaultValue={name}
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
              minWidth="90%"
              onValueChange={typeInput => setType(typeInput)}
              accessibilityLabel="Select your favorite programming language"
              placeholder="Event Type"
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
              <Select.Item label="Birthday" value="birthday" />
              <Select.Item label="Wedding" value="wedding" />
              <Select.Item label="Batch Party" value="party" />
            </Select>
          </VStack>
          <Input
            w="90%"
            mx={3}
            mb={5}
            placeholder="Event Venue"
            onChangeText={venueInput => setVenue(venueInput)}
            defaultValue={venue}
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
            placeholder="Estimated Budget"
            borderColor="lightBlue.600"
            onChangeText={budgetInput => setEstimatedBudget(budgetInput)}
            defaultValue={estimatedBudget}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <Flex
            w="90%"
            direction="row"
            alignItems="center"
            justifyContent="center">
            {/* The button that used to trigger the date picker */}
            <Button
              mb={5}
              w="40%"
              variant={'solid'}
              size="lg"
              bg="lightBlue.600"
              onPress={showDatePicker}>
              Select Date
            </Button>
            <VStack w="10%" />
            {/* Display the selected date */}
            <VStack
              w="50%"
              mb={5}
              space={2}
              paddingY={2}
              alignItems="center"
              border={1.5}
              borderColor="lightBlue.600"
              borderRadius={5}>
              <Text fontSize="xl">
                {date &&
                  `${date?.getDate()} / ${date?.getMonth()} / ${date?.getFullYear()}`}
              </Text>
            </VStack>
          </Flex>

          {/* The date picker */}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDate}
            onCancel={hideDatePicker}
          />
          <Flex
            w="90%"
            mb={10}
            direction="row"
            alignItems="center"
            justifyContent="center">
            {/* The button that used to trigger the time picker */}
            <Button
              mb={5}
              w="40%"
              variant={'solid'}
              size="lg"
              bg="lightBlue.600"
              onPress={showTimePicker}>
              Select Time
            </Button>
            <VStack w="10%" />
            {/* Display the selected time */}
            <VStack
              w="50%"
              mb={5}
              space={2}
              paddingY={2}
              alignItems="center"
              border={1.5}
              borderColor="lightBlue.600"
              borderRadius={5}>
              <Text fontSize="xl">
                {time && `${time?.getHours()} : ${time?.getMinutes()} : 00`}
              </Text>
            </VStack>
          </Flex>

          {/* The time picker */}
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTime}
            onCancel={hideTimePicker}
          />
          <Button
            w="90%"
            variant={'solid'}
            size="lg"
            bg="lightBlue.600"
            onPress={handleSubmit}>
            Add Event
          </Button>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});

export default AddEvent;
