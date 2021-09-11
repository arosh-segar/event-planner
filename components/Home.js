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
import Events from './Event/Events';



function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rectRow}>
        <View style={styles.rect} onTouchStart={()=>{
          navigation.navigate("Events")
        }}>
          <Text style={styles.events}>Events</Text>
        </View>
        <View style={styles.rect2} onTouchStart={()=>{
          navigation.navigate("Guests")
        }}>
          <Text style={styles.guests}>Guests</Text>
        </View>
      </View>
      <View style={styles.rect3Row}>
        <View style={styles.rect3}  onTouchStart={()=>{
          navigation.navigate("To Do List")
        }}>
          <Text style={styles.toDoList}>To-Do-List</Text>
        </View>
        <View style={styles.rect4}  onTouchStart={()=>{
          navigation.navigate("ShoppingList")
        }}>
          <Text style={styles.shoppingList}>Shopping List</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 142,
    height: 116,
    backgroundColor: "#E6E6E6"
  },
  events: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 43,
    marginLeft: 36
  },
  rect2: {
    width: 142,
    height: 116,
    backgroundColor: "#E6E6E6",
    marginLeft: 10
  },
  guests: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: 46,
    marginLeft: 40
  },
  rectRow: {
    height: 116,
    flexDirection: "row",
    marginTop: 187,
    marginLeft: 55,
    marginRight: 26
  },
  rect3: {
    width: 142,
    height: 118,
    backgroundColor: "#E6E6E6"
  },
  toDoList: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: 51,
    marginLeft: 9
  },
  rect4: {
    width: 148,
    height: 118,
    backgroundColor: "#E6E6E6",
    marginLeft: 10
  },
  shoppingList: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginTop: 51,
    marginLeft: 9
  },
  rect3Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 55,
    marginRight: 20
  }
});
export default Home;
