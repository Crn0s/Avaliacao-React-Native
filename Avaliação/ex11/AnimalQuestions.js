import React, { useState } from 'react';
import { View, Text, Picker, CheckBox, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function AnimalScreen({ navigation, route }) {
  const [selectedCharacteristic, setSelectedCharacteristic] = useState('');
  const [selectedHabitat, setSelectedHabitat] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [radioButton, setRadioButton] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const correctAnswers = {
    characteristic: 'mamifero', // Resposta correta para a lista de seleção 1
    habitat: 'terra', // Resposta correta para a lista de seleção 2
    checkbox1: true, // Ambas podem ser verdadeiras
    checkbox2: true,
    radioButton: 'sim', // RadioButton correto
    text1: 'Vertebrado', // Campo de texto 1
    text2: 'Homo sapiens'
  };

  const handleSubmit = () => {
    let score = 0;

    // Conferindo cada resposta
    if (selectedCharacteristic === correctAnswers.characteristic) score++;
    if (selectedHabitat === correctAnswers.habitat) score++;
    if (checkbox1 === correctAnswers.checkbox1 && checkbox2 === correctAnswers.checkbox2) score++;
    if (radioButton === correctAnswers.radioButton) score++;
    if (text1.toLowerCase() === correctAnswers.text1.toLowerCase()) score++;
    if (text2.toLowerCase() === correctAnswers.text2.toLowerCase()) score++;

    const total = 6; // Total de perguntas
    const percentage = (score / total) * 100;

    // Enviando para a página de resultados
    navigation.navigate('Resultado', {
      reino: 'Animal',
      pontos: score,
      porcentagem: percentage
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reino Animal</Text>
      
      {/* Pergunta 1 - Lista de Seleção */}
      <Text>Selecione uma característica dos animais:</Text>
      <Picker
        selectedValue={selectedCharacteristic}
        onValueChange={(itemValue) => setSelectedCharacteristic(itemValue)}
      >
        <Picker.Item label="Mamífero" value="mamifero" />
        <Picker.Item label="Réptil" value="reptil" />
        <Picker.Item label="Peixe" value="peixe" />
      </Picker>

      {/* Pergunta 2 - Lista de Seleção */}
      <Text>Selecione o habitat dos animais:</Text>
      <Picker
        selectedValue={selectedHabitat}
        onValueChange={(itemValue) => setSelectedHabitat(itemValue)}
      >
        <Picker.Item label="Terra" value="terra" />
        <Picker.Item label="Água" value="agua" />
        <Picker.Item label="Ar" value="ar" />
      </Picker>

      {/* Pergunta 3 e 4 - Checkboxes */}
      <Text>Marque as características dos animais:</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox value={checkbox1} onValueChange={setCheckbox1} />
        <Text>Vertebrado</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={checkbox2} onValueChange={setCheckbox2} />
        <Text>Multicelular</Text>
      </View>

      {/* Pergunta 5 e 6 - RadioButtons */}
      <Text>Os animais são multicelulares?</Text>
      <View style={styles.radioContainer}>
        <CheckBox value={radioButton === 'sim'} onValueChange={() => setRadioButton('sim')} />
        <Text>Sim</Text>
      </View>
      <View style={styles.radioContainer}>
        <CheckBox value={radioButton === 'nao'} onValueChange={() => setRadioButton('nao')} />
        <Text>Não</Text>
      </View>

      {/* Pergunta 7 - Campo de Texto */}
      <Text>Descreva uma característica dos animais:</Text>
      <TextInput
        style={styles.input}
        value={text1}
        onChangeText={setText1}
      />

      {/* Pergunta 8 - Campo de Texto */}
      <Text>Qual é o nome científico do ser humano?</Text>
      <TextInput
        style={styles.input}
        value={text2}
        onChangeText={setText2}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </ScrollView>
  );
}

export default AnimalScreen;

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