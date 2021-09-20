import React from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import {NativeBaseProvider, Center} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Event from './Event';
import {FloatingAction} from 'react-native-floating-action';
import {style} from 'styled-system';

class Events extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        {/*<EntypoIcon name="arrow-long-left" style={styles.icon}></EntypoIcon>*/}

        <View style={styles.scrollArea1}>
          <ScrollView style={styles.scrollArea2}>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </ScrollView>
          <FloatingAction
            showBackground={false}
            animated={false}
            onPressMain={() => {
              navigation.navigate('AddEvent');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    marginTop: 75,
    marginLeft: 19,
  },
  scrollArea1: {
    width: '100%',
    height: '100%',
  },
  scrollArea2: {
    width: '100%',
  },
});

export default Events;
