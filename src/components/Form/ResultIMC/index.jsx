import React from 'react';
import { Text, View } from 'react-native';

const ResultIMC = (props) => {
  return (
    <View>
      <Text>{props.resultIMC}</Text>
      <Text>{props.messageResultIMC}</Text>
    </View>
  );
};

export default ResultIMC;
