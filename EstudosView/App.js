import { StyleSheet, View } from 'react-native';

export default function App() {

  // View herda do container de estilos criado logo abaixo
  return (
    <View style={styles.container}>

    </View> 
  );
}
  // container de estilos sendo criado
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // cor do fundo da view
    alignItems: 'center', // manter itens alinhados no centro da view
    justifyContent: 'center', // justificar o contéudo no centro da view
  },
});
