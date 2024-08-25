import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const buttonPressed = () => {
  const summa = parseInt(arvo1) + parseInt(arvo2);
  setTulos(summa.toString());
}

const buttonPressed2 = () => {
  const erotus = parseInt(arvo1) - parseInt(arvo2);
  setTulos(erotus.toString());
}

const [tulos, setTulos] = useState('Tähän tulee tulos');
const [arvo1, setArvo1] = useState('');
const [arvo2, setArvo2] = useState('');

  return (
<View style={styles.container}>
<Text>Result: {tulos}</Text>
<TextInput 
 placeholder='Syötä arvo nro 1'
 onChangeText={arvo1 => setArvo1(arvo1)}
 value={arvo1}
 keyboardType='numeric'  
/>
<TextInput 
 placeholder='Syötä arvo nro 2'
 onChangeText={arvo2 => setArvo2(arvo2)}
 value={arvo2}
 keyboardType='numeric' 
/>
<View style={styles.buttonContainer}>
<Button title='+' onPress={buttonPressed}/>
<Button title='-' onPress={buttonPressed2}/>
</View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  button: {
    marginHorizontal: 10,
  }
});
