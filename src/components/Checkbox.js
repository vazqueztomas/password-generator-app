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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginLeft: 10,
  },
});
export default Checkbox;
