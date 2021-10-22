import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style = {styles.text}> Davinci is the greatest of all time</Text>
      <Button style = {styles.button} title = 'Davinci Code'></Button>
      <StatusBar style="auto" />
    </View>            
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
  },
  button: {
   color: 'black',
  },
});


