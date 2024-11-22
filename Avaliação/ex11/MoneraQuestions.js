import React, { useState } from 'react';
import { View, Text, Picker, CheckBox, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function MoneraScreen({ navigation }) {
  const [selectedCellType, setSelectedCellType] = useState('');
  const [selectedReproduction, setSelectedReproduction] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [radioButton, setRadioButton] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const correctAnswers = {
    cellType: 'procarionte',
    reproduction: 'divisao-binaria',
    checkbox1: true,
    checkbox2: false,
    radioButton: 'sim',
    text1: 'Parede celular de peptidoglicano',
    text2: 'Escherichia coli'
  };

  const handleSubmit = () => {
    let score = 0;

    if (selectedCellType === correctAnswers.cellType) score++;
    if (selectedReproduction === correctAnswers.reproduction) score++;
    if (checkbox1 === correctAnswers.checkbox1 && checkbox2 === correctAnswers.checkbox2) score++;
    if (radioButton === correctAnswers.radioButton) score++;
    if (text1.toLowerCase() === correctAnswers.text1.toLowerCase()) score++;
    if (text2.toLowerCase() === correctAnswers.text2.toLowerCase()) score++;

    const total = 6;
    const percentage = (score / total) * 100;

    navigation.navigate('Resultado', {
      reino: 'Monera',
      pontos: score,
      porcentagem: percentage
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reino Monera</Text>

      <Text>Tipo celular:</Text>
      <Picker
        selectedValue={selectedCellType}
        onValueChange={(itemValue) => setSelectedCellType(itemValue)}
      >
        <Picker.Item label="Procarionte" value="procarionte" />
        <Picker.Item label="Eucarionte" value="eucarionte" />
      </Picker>

      <Text>Tipo de reprodução:</Text>
      <Picker
        selectedValue={selectedReproduction}
        onValueChange={(itemValue) => setSelectedReproduction(itemValue)}
      >
        <Picker.Item label="Cissiparidade" value="cissiparidade" />
        <Picker.Item label="Divisão binária" value="divisao-binaria" />
      </Picker>

      <Text>Características das bactérias:</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox value={checkbox1} onValueChange={setCheckbox1} />
        <Text>Procariontes</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={checkbox2} onValueChange={setCheckbox2} />
        <Text>Pluricelulares</Text>
      </View>

      <Text>Possuem parede celular de peptidoglicano?</Text>
      <View style={styles.radioContainer}>
        <CheckBox value={radioButton === 'sim'} onValueChange={() => setRadioButton('sim')} />
        <Text>Sim</Text>
      </View>
      <View style={styles.radioContainer}>
        <CheckBox value={radioButton === 'nao'} onValueChange={() => setRadioButton('nao')} />
        <Text>Não</Text>
      </View>

      <Text>Descreva uma característica das bactérias:</Text>
      <TextInput
        style={styles.input}
        value={text1}
        onChangeText={setText1}
      />

      <Text>Nome científico de uma bactéria comum:</Text>
      <TextInput
        style={styles.input}
        value={text2}
        onChangeText={setText2}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </ScrollView>
  );
}

export default MoneraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});