import React from 'react';
import {StyleSheet, View, Text, ScrollView,Alert,TouchableOpacity,Touchable} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Task from './Task';
import { FloatingAction } from "react-native-floating-action";
import { Fab ,Box , Icon, NativeBaseProvider ,Button ,Do} from 'native-base'
import MaterialChip from 'react-native-material-chip'
import AntDesign from "react-native-vector-icons/AntDesign";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faCalendar, faPlus ,faEllipsisV} from "@fortawesome/free-solid-svg-icons";


class Tasks extends React.Component{


  render() {

    const {navigation} = this.props

    return (
      <View style={styles.container}>
        {/*<EntypoIcon name="arrow-long-left" style={styles.icon}></EntypoIcon>*/}
          <ScrollView
             horizontal={true}
             style={styles.chipRow}
          >
            <MaterialChip text={"ALL"} style={[styles.chip,{paddingLeft:20}]}/>
            <MaterialChip text={" STATUS"} style={[styles.chip,{paddingLeft:6}]} />
            <MaterialChip text={"PRIORITY"} style={[styles.chip,{paddingLeft:5}]}/>
            <MaterialChip text={"EVENT"} style={[styles.chip,{paddingLeft:13}]}/>
          </ScrollView>
        <View style={styles.scrollArea1}>
          <ScrollView>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </ScrollView>
          {/*<NativeBaseProvider>*/}
          {/*  <TouchableOpacity onPress={()=>{*/}
          {/*    Alert.alert("as")*/}
          {/*  }}>*/}
          {/*  <Box position={"relative"} h={"90%"} w={"100%"}>*/}
          {/*   <Fab*/}
          {/*   active={false}*/}
          {/*   postion={"absolute"}*/}
          {/*   size={"sm"}*/}
          {/*   icon={<FontAwesomeIcon icon={faPlus} color={"white"}/>}*/}
          {/*   />*/}
          {/*   </Box>*/}
          {/*  </TouchableOpacity>*/}
          {/*</NativeBaseProvider>*/}
          <FloatingAction
            color={"blue"}
            showBackground={false}
            animated={false}
            onPressMain={()=>{
              navigation.navigate("AddTask")
            }}/>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:100,
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
    top: 100,
    width: 405,
    height: 400,
    position: "absolute",
    left: 0
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
  },
  chipRow:{
    height: 32,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 18,
    marginRight: 54
  },
  chip:{
    width:100,
    backgroundColor:"blue"
  }
});

export default Tasks
