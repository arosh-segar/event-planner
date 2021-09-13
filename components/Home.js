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
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
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
    width: wp('35%'),
    height: hp('18%'),
    backgroundColor: "#E6E6E6"
  },
  events: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: hp('3%'),
    marginTop: hp('6%'),
    marginLeft: wp('10%')
  },
  rect2: {
    width: wp('35%'),
    height: hp('18%'),
    backgroundColor: "#E6E6E6",
    marginLeft: wp('4%')
  },
  guests: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: hp('3%'),
    marginTop: hp('6%'),
    marginLeft: wp('10%')
  },
  rectRow: {
    height: hp('1%'),
    flexDirection: "row",
    marginTop: hp('30%'),
    marginLeft: wp('14%')
  },
  rect3: {
    width: wp('35%'),
    height: hp('18%'),
    backgroundColor: "#E6E6E6"
  },
  toDoList: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: hp('3%'),
    marginTop: hp('6%'),
    marginLeft: wp('8%')
  },
  rect4: {
    width: wp('35%'),
    height: hp('18%'),
    backgroundColor: "#E6E6E6",
    marginLeft: wp('4%')
  },
  shoppingList: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: hp('3%'),
    marginTop: hp('6%'),
    marginLeft: wp('8%')
  },
  rect3Row: {
    height: hp('1%'),
    flexDirection: "row",
    marginTop: hp('20%'),
    marginLeft: wp('14%')
  }
});
export default Home;
