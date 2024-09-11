import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Aqui há somente um novo bracket de componente, englobando o componente Text! 
  // Porém o componente de texto está recebendo um estilo próprio, declarado fora do container da View
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Exemplo de Texto!</Text> 
    </View>
  );
}

  // Aqui eu editei a cor de fundo do container de view, o que se aplica pra todo o fundo do app
  // e ainda inverti a cor da fonte do texto
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    fontSize: 35,
    color: '#FFF',
  },
});
