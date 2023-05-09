import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = ({ label }) => {
  return (
    <BouncyCheckbox
      text={label}
      textStyle={{ color: "white", textDecorationLine: "none" }}
    />
  );
};

export default Checkbox;
