import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ResultIMC from './ResultIMC';
import style from './style';

const Form = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha os campos de 'Peso' e 'ALtura'!");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');

  const imcCalculator = () => {
    return setImc((weight / (height * height)).toFixed(2));
  }

  const validIMC = () => {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC(`seu IMC é igual a:`);
      setTextButton('Calcular novamente');
      return;
    };
    setImc(null);
    setTextButton('Calcular');
    setMessageIMC(`Preencha os campos de 'Peso' e 'ALtura'!`);
  }

  return (
    <View style={style.formContext}>
      <View style={style.form}>
        <Text style={style.formLabel}>Altura</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setHeight}
          value={height}
          placeholder={'Ex: 1.75'}
          keyboardType={'numeric'}
        />

        <Text style={style.formLabel}>Peso</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setWeight}
          value={weight}
          placeholder={'Ex: 75.36'}
          keyboardType={'numeric'}
        />

        {/* <Button
          title={textButton}
          onPress={() => validIMC()}
        /> */}
        <TouchableOpacity
          style={style.buttonCalculator}
          onPress={() => validIMC()}
        >
          <Text style={style.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultIMC
        messageResultIMC={messageIMC}
        resultIMC={imc}
      />
    </View>
  );
};

export default Form;
