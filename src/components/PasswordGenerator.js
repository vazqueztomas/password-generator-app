import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import Checkbox from "./Checkbox";
import { SafeAreaView } from "react-native";

const PasswordGenerator = ({ setPassword }) => {
  const [length, setLength] = useState(6);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeLower, setIncludeLower] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState("");

  function makeid(length, characters) {
    let result = "";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const handleGenerate = () => {
    let characters = "";
    if (includeUpper) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLower) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
    }
    if (!includeLower && !includeNumbers && !includeSymbols && !includeUpper) {
      alert("debes completar algun checkbox");
    }
    setSelectedCharacters(characters);
    const result = makeid(length, characters);
    setPassword(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.amountDiv}>
        <Text style={styles.amount}>{length}</Text>
      </View>
      <Slider
        value={length}
        onValueChange={length => setLength(length)}
        minimumValue={3}
        maximumValue={16}
        step={1}
        trackClickable={true}
      />
      <View style={styles.checkboxDiv}>
        <Checkbox
          label="Include uppercase letters"
          isChecked={includeUpper}
          setInclude={setIncludeUpper}
        />
        <Checkbox
          label="Include Lowercase letters"
          isChecked={includeLower}
          setInclude={setIncludeLower}
        />
        <Checkbox
          label="Include numbers"
          isChecked={includeNumbers}
          setInclude={setIncludeNumbers}
        />
        <Checkbox
          label="Include symbols"
          isChecked={includeSymbols}
          setInclude={setIncludeSymbols}
        />
      </View>

      <View style={styles.strenght}>
        <Text>STRENGHT</Text>
      </View>

      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>GENERATE</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    marginTop: 20,
    height: "60%",
    justifyContent: "center",
  },
  amountDiv: {
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  checkboxDiv: {
    gap: 15,
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    color: "black",
  },
  amount: {
    color: "orange",
    fontWeight: "bold",
  },
  characterLenght: {
    color: "black",
  },
  strenght: {
    width: "100%",
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "orange",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "orange",
  },
});

export default PasswordGenerator;
