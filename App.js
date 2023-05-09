import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PasswordGenerator from "./src/components/PasswordGenerator";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";

export default function App() {
  const [passwordGenerated, setPasswordGenerated] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async string => {
    console.log(string);
    await Clipboard.getStringAsync(string);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Password generator</Text>
      <View style={styles.passwordContainer}>
        <Text>{passwordGenerated}</Text>
        <TouchableOpacity onPress={() => copyToClipboard(passwordGenerated)}>
          <Text>Copy</Text>
        </TouchableOpacity>
      </View>
      <PasswordGenerator setPassword={setPasswordGenerated} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    color: "lightgray",
  },
  passwordContainer: {
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    padding: 16,
    width: "70%",
  },
});
