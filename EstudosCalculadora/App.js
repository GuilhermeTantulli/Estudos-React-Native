// Imports necessários para o código

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// criação do app como uma função 

export default function app () {

  // declaração das constantes -> useStates inicializados vazios são como variáveis que começam sem valor

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('adicionar');
  const [result, setResult] = useState(null);

  // arrow function para calcular

  const calculate = () => {

    // casting de string para int
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // tratativa de erro para o caso de digitarem algo que não é um número em qualquer um dos dois parâmetros
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Por favor, insira numeros válidos!')
      return;
    }

  // switch case para as opções de cálculo
  let res;
  switch (operation) {
    case 'adicionar':
      res = number1 + number2;
      break;

    case 'subtrair':
      res = number1 - number2;
      break;

    case 'multiplicar':
      res = number1 * number2;
      break;

    case 'dividir':
      if (number2 === 0) {
        setResult('Operação inválida! \n Não é possível dividir por 0');
        return;
      }

      res = number1 / number2;
      break;

    default:
      res = 'Operação Inválida!';
  }
  setResult(res);
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Simples</Text>
  
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
  
      {/* Seleção da operação */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.operationButton, operation === 'add' && styles.selected]}
          onPress={() => setOperation('adicionar')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.operationButton, operation === 'subtract' && styles.selected]}
          onPress={() => setOperation('subtrair')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.operationButton, operation === 'multiply' && styles.selected]}
          onPress={() => setOperation('multiplicar')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.operationButton, operation === 'divide' && styles.selected]}
          onPress={() => setOperation('dividir')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
  
      {/* Botão de calcular */}
      <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
        <Text style={styles.calculateText}>Calcular</Text>
      </TouchableOpacity>
  
      {/* Resultado */}
      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
};

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
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  marginBottom: 20,
},
operationButton: {
  backgroundColor: '#F03C25',
  padding: 15,
  borderRadius: 10,
  width: 50,
  alignItems: 'center',
},
selected: {
  backgroundColor: '#ff6f61',
},
buttonText: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
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
result: {
  fontSize: 20,
  fontWeight: 'bold',
},
});