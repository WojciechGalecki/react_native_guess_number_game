import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen({ onPickNumber }) {
  const [number, setNumber] = useState('');

  function numberInputHandler(inputText) {
    setNumber(inputText);
  }

  function resetInputhandler() {
    setNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputhandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="decimal-pad"
        value={number}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4, // android
    shadowColor: 'balck', // ios
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowRadius: 6, // ios
    shadowOpacity: 0.25, // ios
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
