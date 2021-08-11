import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Move from './components/Move'
import Position from './components/Position'

export default function App() {
  return (
    <View style={styles.container}>
      <Position></Position>
      <Move/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
NOTES:
  1. https://callstack.github.io/react-native-paper  - ui lib
  2. https://docs.expo.dev/versions/v42.0.0/sdk/accelerometer/ - 
    Accelerometer from expo-sensors 
    provides access to the device accelerometer sensor(s) 
    and associated listeners to respond to changes in acceleration 
    in 3d space, meaning any movement or vibration.
  3. https://docs.expo.dev/versions/v42.0.0/sdk/location/ - 
    expo-location allows reading geolocation information from the device. 
    Your app can poll for the current location or subscribe to location update events.
*/