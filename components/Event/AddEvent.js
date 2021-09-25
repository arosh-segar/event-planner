import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Platform} from 'react-native';
//import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
//import MaterialButtonPrimary from "MaterialButtonPrimary";
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

function AddEvent(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

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

  return (
    <NativeBaseProvider>
      <Center mt={10}>
        <Input
          w="90%"
          mx={3}
          mb={5}
          placeholder="Event Name"
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
            minWidth="90%"
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
            <Select.Item label="Birthday" value="Birthday" />
            <Select.Item label="Wedding" value="Wedding" />
            <Select.Item label="Batch Party" value="Batch Party" />
          </Select>
        </VStack>
        <Input
          w="90%"
          mx={3}
          mb={5}
          placeholder="Event Venue"
          borderColor="lightBlue.600"
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
        <Button w="90%" variant={'solid'} size="lg" bg="lightBlue.600">
          Add Event
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default AddEvent;
