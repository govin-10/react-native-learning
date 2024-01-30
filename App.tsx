/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, Button, StatusBar} from 'react-native';
import ButtonComp from './components/ButtonComp';
import UseState from './components/UseState';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

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

const Tab = createMaterialTopTabNavigator();

function App(): React.JSX.Element {
  return (
    // <SafeAreaView style={{marginTop: 40}}>
    //   <View>
    //     <StatusBar
    //       backgroundColor={'#a6c0d9'}
    //       hidden={false}
    //       barStyle={'dark-content'}
    //     />
    //     <ButtonComp />

    //     <Text>Hello World</Text>

    //     {/* <UserData name="GOvin" age={34} email="hellogovin@gmail.com" />
    //     <UserData name="Tim" age={22} email="timdavid@gmail.com" />
    //     <Text>Hello</Text> */}

    //     <UseState />
    //   </View>
    // </SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

/**
 * JSX: Javascript Xtension
 * Feature of writing HTML within JS
 *
 */
