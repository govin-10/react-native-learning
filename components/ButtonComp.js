import React from 'react';
import {Button, View} from 'react-native';

export default function ButtonComp() {
  function pressMessage() {
    console.warn('you pressed me!!');
  }
  return (
    <View>
      <Button title="Press Me" color={'red'} onPress={pressMessage}></Button>
    </View>
  );
}

//button is an inbuilt component in react native. has some properties
// and onPress event handler to handle the even when pressed the button.
