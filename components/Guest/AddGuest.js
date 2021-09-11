import React, { Component } from "react";
import { StyleSheet, View, TextInput,Button,Text } from "react-native";
import {Picker} from '@react-native-picker/picker'
import RadioButton from 'radio-buttons-react-native'

function AddGuest(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TextInput
          style={styles.textInput}
          placeholder={"Event Name"}
        />
      </View>
      <View style={styles.rect}>
        <Picker
          style={styles.textInput}
        >
          <Picker.Item label={"Event"} value={1}/>
          <Picker.Item label={"event"} value={1}/>
          <Picker.Item label={"event"} value={1}/>
        </Picker>
      </View>
      <View style={styles.rect}>
        <TextInput
          style={styles.textInput}
          placeholder={"Event Name"}
        />
      </View>
      <View style={styles.rect}>
        <TextInput
          style={styles.textInput}
          placeholder={"Event Name"}
        />
      </View>
      <View style={styles.rect}>
        <TextInput
          style={styles.textInput}
          placeholder={"Event Name"}
        />
      </View>
      <View style={styles.rect}>



      </View>
      <View style={styles.Button}>
        <Button
          title={"Add"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100
  },
  rect: {
    width: 337,
    height: 53,
    backgroundColor: "#E6E6E6",
    marginTop: 7,
    marginLeft: 19
  },
  textInput: {
    height: 39,
    width: 278,
    marginTop: 5,
    marginLeft: 16
  },
  addEvent: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 21,
    width: 82,
    marginTop: -144,
    marginLeft: 139
  },
  Button: {
    height: 36,
    width: 130,
    marginTop: 40,
    marginLeft: 110
  }
});

export default AddGuest;
