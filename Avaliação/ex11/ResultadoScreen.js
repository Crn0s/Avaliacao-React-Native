import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ResultadoScreen({ route, navigation }) {
  const { reino, pontos, porcentagem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados - Reino {reino}</Text>
      <Text style={styles.resultText}>Você acertou {pontos} de 6 perguntas.</Text>
      <Text style={styles.resultText}>Porcentagem de acertos: {porcentagem.toFixed(2)}%</Text>

      <Button
        title="Voltar ao Início"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default ResultadoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
});