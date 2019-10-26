import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  console.tron.warn('MUDA');
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Jesus é meu salvador!</Text>
      <Text style={styles.welcome}>Amém!</Text>
    </View>
  );
}
