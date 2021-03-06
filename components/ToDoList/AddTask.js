import React, {useState, useEffect} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Flex,
  Select,
  Text,
  VStack,
  CheckIcon,
  Center,
  Button,
  NativeBaseProvider,
  Input,
} from 'native-base';
import {StyleSheet, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function AddTask(route) {
  const {addTasks} = route.route.params;
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [event, setEvent] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [events, setEvents] = useState([]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  useEffect(() => {
    getEvents();
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const getEvents = async () => {
    const result = await AsyncStorage.getItem('events');
    if (result !== null) {
      setEvents(JSON.parse(result));
    }
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

  const handleSubmit = async () => {
    const task = {
      name,
      priority,
      event,
      notes,
      status: 'Pending',
      date: `${date?.getDate()} / ${date?.getMonth()} / ${date?.getFullYear()}`,
      time: `${time?.getHours()} : ${time?.getMinutes()} : 00`,
    };

    addTasks(task);
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        hp={'100%'}
        wp={'100%'}
        source={require('../ImageBackground/image/bg-1.png')}
        resizeMode="cover"
        style={styles.image}>
        <Center mt={10}>
          <Input
            w="90%"
            mx={3}
            mb={5}
            bg={'#FFFFFF'}
            placeholder="Task Name"
            borderColor="lightBlue.600"
            onChangeText={taskInput => setName(taskInput)}
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
              bg={'#FFFFFF'}
              borderColor="lightBlue.600"
              minWidth="90%"
              onValueChange={priorityInput => setPriority(priorityInput)}
              accessibilityLabel="Select your favorite programming language"
              placeholder="Priority"
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
              <Select.Item label="Low" value="Low" />
              <Select.Item label="Medium" value="Medium" />
              <Select.Item label="High" value="High" />
            </Select>
          </VStack>
          <VStack alignItems="center" space={4} mb={5}>
            <Select
              bg={'#FFFFFF'}
              borderColor="lightBlue.600"
              minWidth="90%"
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
              {events.map(e => (
                <Select.Item label={e.name} value={e.name} />
              ))}
            </Select>
          </VStack>

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
              bg={'#FFFFFF'}
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
              bg={'#FFFFFF'}
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

          <Input
            w="90%"
            h={20}
            mx={3}
            bg={'#FFFFFF'}
            mb={5}
            placeholder="Notes"
            onChangeText={notesInput => setNotes(notesInput)}
            defaultValue={notes}
            borderColor="lightBlue.600"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />

          <Button
            onPress={handleSubmit}
            w="90%"
            variant={'solid'}
            size="lg"
            bg="lightBlue.600">
            Add Task
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
  },
});
export default AddTask;
