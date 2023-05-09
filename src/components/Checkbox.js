import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = ({ label, setInclude }) => {
  return (
    <BouncyCheckbox
      text={label}
      textStyle={{ color: "black", textDecorationLine: "none" }}
      onPress={isChecked => setInclude(isChecked)}
    />
  );
};

export default Checkbox;
