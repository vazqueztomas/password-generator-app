import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PasswordGenerator from "./src/components/PasswordGenerator";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Password generator</Text>
      <View style={styles.passwordContainer}>
        <Text>Aca iria la password</Text>
      </View>

      <PasswordGenerator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    color: "gray",
  },
  passwordContainer: {
    backgroundColor: "gray",
    marginTop: 10,
    padding: 16,
    width: "70%",
  },
});
