
import { StyleSheet, Button, View, Alert } from 'react-native';

export default function App() {
  // Para criar um botão é necessário passar como propriedade o seu titulo 
  // title = 'Qualquer coisa'
  // Alert -> é preciso importá-lo e chamar a função alert da biblioteca Alert
  // passando como parâmetro a mensagem que deseja exibir
  // e atribuir tudo isso ao evento onPress={() =>}

  return (
    <View style={styles.container}>
      <Button
      title='Teste'
      // style={styles.customButton} -> Não funciona 
      onPress={() => Alert.alert('Botão Pressionado')}>
      </Button>
    </View>
  );
}

// É interessante dizer que não existe customização do componente Button!
// Para se fazer um botão customizado é necessário utilizar outro componenete
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
