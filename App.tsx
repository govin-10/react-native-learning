/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

const UserData: React.FC<{name: string; age: number; email: string}> = ({
  name,
  age,
  email,
}) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{marginTop: 40}}>
      <View>
        <Button title="Press Me"></Button>
        <Text>Hello World</Text>
        <UserData name="GOvin" age={34} email="hellogovin@gmail.com" />
        <UserData name="Tim" age={22} email="timdavid@gmail.com" />
      </View>
    </SafeAreaView>
  );
}

export default App;

/**
 * JSX: Javascript Xtension
 * Feature of writing HTML within JS
 *
 */
