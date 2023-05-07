import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import Checkbox from "./Checkbox";

const PasswordGenerator = () => {
  const [length, setLength] = useState(6);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>PasswordGenerator</Text>
        <Text>{length}</Text>
      </View>
      <Slider
        value={length}
        onValueChange={() => setLength(length)}
        minimumValue={3}
        maximumValue={8}
        step={1}
        trackClickable={true}
      />
      <View style={{ gap: 15, marginTop: 20, marginLeft: 10 }}>
        <Checkbox label="Include uppercase letters" />
        <Checkbox label="Include Lowercase letters" />
        <Checkbox label="Include numbers" />
        <Checkbox label="Include symbols" />
      </View>

      <View style={styles.strenght}>
        <Text>STRENGHT</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>GENERATE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "70%",
    marginTop: 20,
    height: "50%",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "orange",
    marginHorizontal: 20,
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
