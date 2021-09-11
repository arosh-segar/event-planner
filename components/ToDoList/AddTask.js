import React, { Component, useDebugValue, useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker'
import RadioButton from 'radio-buttons-react-native'
import DateInput from 'react-native-datepicker'
import TimeInput from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/FontAwesome'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'

function AddTask(props) {

  const[show,setShow] = useState(false)
  const[time,setTime] = useState("End Time")

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TextInput
          style={styles.textInput}
          placeholder={"Task Name"}
        />
      </View>
      <View style={styles.rect}>
        <Picker
          style={styles.textInput}
        >
          <Picker.Item label={"Priority"} value={1}/>
          <Picker.Item label={"event"} value={1}/>
          <Picker.Item label={"event"} value={1}/>
        </Picker>
      </View>
      <View style={styles.rect}>
        <Picker
          style={styles.textInput}
        >
          <Picker.Item label={"Event Name"} value={1}/>
          <Picker.Item label={"event"} value={1}/>
          <Picker.Item label={"event"} value={1}/>
        </Picker>
      </View>
      <View style={styles.rect}>
        <DateInput
          style={styles.textInput}
          useNativeDriver={true}
          mode={"date"}
          showIcon={false}
          placeholder={"End Date"}
        />
      </View>
      <View style={[styles.rect,{flexDirection:"row"}]}>
        <FontAwesomeIcon
          icon={faCalendar}
          style={styles.calendar}
          onPress={()=>{
            setShow(true)
          }}
         />
        <TextInput
         value={time}
        />
        {show &&(
        <TimeInput
          style={styles.textInput}
          value={new Date(1598051730000)}
          mode={'time'}
          show={false}
          onChange={(e,v)=>{
           // Alert.alert(v.toString())
            setTime(v.toLocaleTimeString())
            setShow(false)
          }}
        />
        )}
      </View>
      <View style={styles.rect}>
        <TextInput
          style={styles.textInput}
          placeholder={"Notes"}
        />
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
  },
  calendar:{
    marginLeft:10,
    height:500

  }
});

export default AddTask;
