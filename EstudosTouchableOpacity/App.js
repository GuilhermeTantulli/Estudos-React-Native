import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  // Esse componente é a construção de um botão com texto dentro
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => Alert.alert('Botão Pressionado')}>
        <Text style={styles.buttonText}>Botão Personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    backgroundColor: '#333', // Cor de fundo do botão
    paddingVertical: 12,        // Espaçamento vertical interno
    paddingHorizontal: 20,      // Espaçamento horizontal interno
    borderRadius: 10,           // Borda arredondada
    borderColor: '#000',        // Cor da borda
    borderWidth: 2,             // Espessura da borda
  },
  buttonText: {
    color: '#fff',              // Cor do texto
    fontSize: 18,               // Tamanho da fonte
    fontWeight: 'bold',         // Peso da fonte
    textAlign: 'center',        // Alinhamento do texto
  },
});
