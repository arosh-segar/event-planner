import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Touchable,
} from 'react-native';
import Task from './Task';
import FAB from 'react-native-fab';
import {
  Center,
  VStack,
  HStack,
  Input,
  Select,
  CheckIcon,
  Text,
} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import AsyncStorage from '@react-native-community/async-storage';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  componentDidMount = () => {
    this.getTasks();
  };

  getTasks = async () => {
    const result = await AsyncStorage.getItem('tasks');
    if (result !== null) {
      this.setState({tasks: JSON.parse(result)});
    }
  };

  deleteTaskByName = async name => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.name !== name),
    });
    await AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };

  addTasks = async task => {
    const updatedTasks = [...this.state.tasks, task];
    this.setState({tasks: updatedTasks});
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  render() {
    const {navigation} = this.props;

    return (
      <NativeBaseProvider>
        <ImageBackground
          hp={'100%'}
          wp={'100%'}
          source={require('../ImageBackground/image/bg.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Center h="100%">
            <HStack w={'90%'} h={'10%'}>
              <ScrollView horizontal={true}>
                <HStack space={3}>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                  <Center
                    border={0}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600"
                    bg={'lightBlue.600'}>
                    <Text px={25} color={'#ffff'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                  <Center
                    border={3}
                    borderRadius={20}
                    height={'65%'}
                    borderColor="lightBlue.600">
                    <Text px={25} color={'lightBlue.600'} fontWeight={700}>
                      ALL
                    </Text>
                  </Center>
                </HStack>
              </ScrollView>
            </HStack>
            <VStack alignItems="center" space={4} mb={5}>
              <Select
                borderColor="lightBlue.600"
                minWidth="90%"
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
            <VStack w="100%" h="70%">
              <ScrollView>
                {this.state.tasks.map((task, index) => (
                  <Task
                    key={index}
                    task={task}
                    deleteTaskByName={this.deleteTaskByName}
                  />
                ))}
              </ScrollView>
            </VStack>
            <FAB
              buttonColor="#FFFFFF"
              iconTextColor="#0D6E92"
              onClickAction={() => {
                navigation.navigate('AddTask');
                navigation.navigate('AddTask', {addTasks: this.addTasks});
              }}
              visible={true}
            />
          </Center>
        </ImageBackground>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    marginTop: 75,
    marginLeft: 19,
  },
  rect: {
    top: 0,
    width: 375,
    height: '100%',
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    left: 0,
  },
  scrollArea1: {
    top: 100,
    width: 405,
    height: 400,
    position: 'absolute',
    left: 0,
  },
  rectStack: {
    width: 375,
    height: 165,
  },
  icon2: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    marginLeft: 75,
    marginTop: 143,
  },
  rectStackRow: {
    height: 186,
    flexDirection: 'row',
    marginTop: 7,
    marginRight: -115,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  chipRow: {
    height: 32,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 18,
    marginRight: 54,
  },
  chip: {
    width: 100,
    backgroundColor: 'blue',
  },
});

export default Tasks;
