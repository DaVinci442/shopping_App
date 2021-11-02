import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Linking, Image, } from 'react-native';

export default function App() {
  const presser = () => console.log(" The Mordern Shopping App 😇 fthrsrstrstrsrtsrsrsreearearar ")
  return (
    <SafeAreaView style={styles.body}>
      <Text style = {styles.text} onPress = {(presser)} numberOfLines = {1}> The Mordern Shopping App 😇 fthrsrstrstrsrtsrsrsreearearar </Text>
      <Button title = 'Dcit208-IA'  onPress={()=>{Linking.openURL('https://yout.ube/WBneezfRN4E')}} ></Button>
      <Image source = {require("C:\Users\Davinci\AwesomeProject\assets\icon.png")}/>
      
      <Text style = {styles.text}>Contact Me</Text>
   <StatusBar style="auto" />
    </SafeAreaView>    
              
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
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    color : 'red',
  },
});



