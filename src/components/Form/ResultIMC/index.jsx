import React from 'react';
import { Text, View } from 'react-native';

const ResultIMC = (props) => {
  return (
    <View>
      <Text>{props.messageResultIMC} {props.resultIMC}</Text>
    </View>
  );
};

export default ResultIMC;
