import React from 'react';
import {StyleSheet, ScrollView, ImageBackground} from 'react-native';
import Task from './Task';
import FAB from 'react-native-fab';
import {Center, VStack, HStack, Select, CheckIcon} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import AsyncStorage from '@react-native-community/async-storage';
import Chip from './Chip';

const priority = ['Low', 'Medium', 'High'];
const events = ['e1', 'e2', 'e3'];
const status = ['pending', 'done'];
const tasks = ['t1', 't2', 't3'];

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      selected: false,
      currentSelection: '',
      filterBy: [],
      event: events,
      priority: priority,
      status: status,
      taskNames: tasks,
      selectedValue: '',
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
    this.props.navigation.navigate('To Do List');
  };

  onChipSelected = option => {
    this.setState({selectedValue: ''});
    this.setState({selected: !this.state.selected});
    this.setState({currentSelection: option});
    let filter = [];
    if (option === 'Event') {
      filter = this.state.event;
    } else if (option === 'Priority') {
      filter = this.state.priority;
    } else if (option === 'Status') {
      filter = this.state.status;
    } else if (option === 'Task') {
      filter = this.state.taskNames;
    }
    this.setState({filterBy: filter});
  };

  render() {
    const {navigation} = this.props;
    const select = this.state.currentSelection;
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
                  {
                    <Chip
                      selectedOption={'Event'}
                      onChipSelected={this.onChipSelected}
                      selected={
                        this.state.currentSelection === 'Event' ? true : false
                      }
                    />
                  }
                  {
                    <Chip
                      selectedOption={'Priority'}
                      onChipSelected={this.onChipSelected}
                      selected={
                        this.state.currentSelection === 'Priority'
                          ? true
                          : false
                      }
                    />
                  }
                  {
                    <Chip
                      selectedOption={'Status'}
                      onChipSelected={this.onChipSelected}
                      selected={
                        this.state.currentSelection === 'Status' ? true : false
                      }
                    />
                  }
                  {
                    <Chip
                      selectedOption={'Task'}
                      onChipSelected={this.onChipSelected}
                      selected={
                        this.state.currentSelection === 'Task' ? true : false
                      }
                    />
                  }
                </HStack>
              </ScrollView>
            </HStack>
            <VStack alignItems="center" space={4} mb={5}>
              <Select
                borderColor="lightBlue.600"
                minWidth="90%"
                accessibilityLabel="Select your favorite programming language"
                placeholder={this.state.currentSelection}
                onValueChange={input => this.setState({selectedValue: input})}
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
                {this.state.filterBy.map((value, index) => {
                  return (
                    <Select.Item key={index} label={value} value={value} />
                  );
                })}
              </Select>
            </VStack>
            <VStack w="100%" h="70%">
              <ScrollView>
                {!this.state.selectedValue ? (
                  <>
                    {this.state.tasks.map((task, index) => (
                      <>
                        <Task
                          key={index}
                          task={task}
                          deleteTaskByName={this.deleteTaskByName}
                        />
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {this.state.tasks.map((task, index) => (
                      <>
                        {task[this.state.currentSelection.toLowerCase()] ===
                          this.state.selectedValue && (
                          <Task
                            key={index}
                            task={task}
                            deleteTaskByName={this.deleteTaskByName}
                          />
                        )}
                      </>
                    ))}
                  </>
                )}
              </ScrollView>
            </VStack>
            <FAB
              buttonColor="blue"
              iconTextColor="#FFFFFF"
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
