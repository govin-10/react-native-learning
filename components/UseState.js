import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function UseState() {
  const [name, setName] = useState('Govin');
  const [inputName, setInputName] = useState('default');

  const changeName = () => {
    if (name === 'Govin') setName('Govinda');
    else setName('Govin');
  };

  const changeINputData = e => {
    setInputName(e.target.value);
  };
  return (
    <View>
      <Text> From UseState</Text>
      <Button
        title={'Show' + (name === 'Govin' ? 'full name' : 'short name')}
        onPress={changeName}
      />
      <Text>{name}</Text>

      <TextInput
        placeholder="ENter your name:"
        style={styles.inputBox}
        onChangeText={newName => setInputName(newName)}></TextInput>
      <Text>{inputName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingLeft: 20,
  },
});
