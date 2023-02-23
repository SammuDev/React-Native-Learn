import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

const ResultIMC = (props) => {
  return (
    <View style={style.resultIMC}>
      <Text style={style.information}>{props.messageResultIMC}</Text>
      <Text style={style.numberIMC}>{props.resultIMC}</Text>
    </View>
  );
};

export default ResultIMC;
