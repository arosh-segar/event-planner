import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './components/Home';
import Events from './components/Event/Events';
import AddEvent from './components/Event/AddEvent';
import Guest from './components/Guest/Guest';
import Guests from './components/Guest/Guests';
import AddGuest from './components/Guest/AddGuest';
import Task from './components/ToDoList/Task';
import Tasks from './components/ToDoList/Tasks';
import AddTask from './components/ToDoList/AddTask';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={'Home'} component={Home} />
        <Screen name={'Events'} component={Events} />
        <Screen name={'AddEvent'} component={AddEvent} />
        <Screen name={'Guest'} component={Guest} />
        <Screen name={'Guests'} component={Guests} />
        <Screen name={'AddGuest'} component={AddGuest} />
        <Screen name={'Task'} component={Task} />
        <Screen name={'To Do List'} component={Tasks} />
        <Screen name={'AddTask'} component={AddTask} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
