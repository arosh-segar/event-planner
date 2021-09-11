import React from 'react';
import {StyleSheet, View, Text, ScrollView,Alert} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Event from './Event';
import { FloatingAction } from "react-native-floating-action";


class Events extends React.Component{


  render() {

    const {navigation} = this.props

    return (
      <View style={styles.container}>
        {/*<EntypoIcon name="arrow-long-left" style={styles.icon}></EntypoIcon>*/}

            <View style={styles.scrollArea1}>
                <ScrollView>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                </ScrollView>
              <FloatingAction
                showBackground={false}
                animated={false}
                onPressMain={()=>{
                   navigation.navigate("AddEvent")
                }}/>
            </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 75,
    marginLeft: 19
  },
  rect: {
    top: 0,
    width: 375,
    height: 84,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0
  },
  scrollArea1: {
    top: 81,
    width: 405,
    height: 404,
    position: "absolute",
    left: 0
  },
  scrollArea1_contentContainerStyle: {
    height: 84,
    width: 375
  },
  rectStack: {
    width: 375,
    height: 165
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 75,
    marginTop: 143
  },
  rectStackRow: {
    height: 186,
    flexDirection: "row",
    marginTop: 7,
    marginRight: -115
  }
});

export default Events
