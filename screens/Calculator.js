import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';

export default function Calculator({ navigation}) {
  const [tulos, setTulos] = useState('');
  const [arvo1, setArvo1] = useState('');
  const [arvo2, setArvo2] = useState('');
  const [todos, setTodos] = useState([]);

  const calculate = (operator) => {
    const [num1, num2] = [Number(arvo1), Number(arvo2)];
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        setTulos(result);
        setTodos([{ key: `${num1} + ${num2} = ${result}` }, ...todos]);
        break;
      case '-':
        result = num1 - num2;
        setTulos(result);
        setTodos([{ key: `${num1} - ${num2} = ${result}` }, ...todos]);
        break;
    }
    setArvo1('');
    setArvo2('');
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
      <Text>Result: {tulos}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text1 => setArvo1(text1)}
        value={arvo1}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={text2 => setArvo2(text2)}
        value={arvo2}
        keyboardType='numeric'
      />
      <View style={styles.operators}>
        <Button title='+' onPress={() => calculate('+')} />
        <Button title='-' onPress={() => calculate('-')} />
      </View>
      <Button
        title="History"
        onPress={() => navigation.navigate('History', {todos})}
      />
      <StatusBar style='auto' />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  input: {
    borderColor: 'grey',
    margin: 5,
    borderWidth: 1,
    padding: 5,
    width: '50%',
  },
  operators: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
  },
});
