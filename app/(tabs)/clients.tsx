import { StyleSheet, Text, View } from 'react-native';

export default function clients() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clientes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});