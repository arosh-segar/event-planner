import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Guest(){


  return(

    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>Event name:{"\n"}Event type:</Text>
        <Text style={styles.loremIpsum}>Event name:{"\n"}Event type:</Text>
        {/*<Icon name="dots-three-vertical" style={styles.icon}></Icon>*/}
      </View>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 410,
    height: 100,
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 97,
    marginTop: 20,
    marginLeft: 12
  } ,
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 43,
    width: 40,
    marginLeft: 380,
    marginBottom:500
  },
});


export default Guest
