import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Form = () => {
  return (
    <View>
      <View>
        <Text>Peso</Text>
        <TextInput placeholder={'Ex: 1.75'}></TextInput>

        <Text>Altura</Text>
        <TextInput></TextInput>
      </View>

      <View></View>

      <View></View>
    </View>
  );
};

export default Form;
