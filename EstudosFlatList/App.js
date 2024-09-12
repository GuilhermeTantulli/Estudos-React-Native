import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  const calculateNotes = () => {
    const amount = parseInt(value);

    // Verifica se o valor é múltiplo de 10 e maior que 0
    if (isNaN(amount) || amount <= 0 || amount % 10 !== 0) {
      setResult([{ key: 'Erro: Digite um valor múltiplo de 10 maior que zero.' }]);
      return;
    }

    let remainingAmount = amount;
    const notes = [];

    // Calcular o número de notas de 50
    const fifties = Math.floor(remainingAmount / 50);
    if (fifties > 0) {
      notes.push({ key: `Notas de 50: ${fifties}` });
      remainingAmount %= 50;
    }

    // Calcular o número de notas de 20
    const twenties = Math.floor(remainingAmount / 20);
    if (twenties > 0) {
      notes.push({ key: `Notas de 20: ${twenties}` });
      remainingAmount %= 20;
    }

    // Calcular o número de notas de 10
    const tens = Math.floor(remainingAmount / 10);
    if (tens > 0) {
      notes.push({ key: `Notas de 10: ${tens}` });
      remainingAmount %= 10;
    }

    setResult(notes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Notas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um valor múltiplo de 10"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />

      <TouchableOpacity style={styles.calculateButton} onPress={calculateNotes}>
        <Text style={styles.calculateText}>Calcular</Text>
      </TouchableOpacity>

      {/* FlatList para exibir o resultado */}
      <FlatList
        data={result}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  calculateButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  calculateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
  },
});
