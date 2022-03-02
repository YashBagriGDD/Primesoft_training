import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const RollCallScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header title={"Rolls Calls"} />
      <View style={styles.screen}>
        <Text>The Roll Calls Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RollCallScreen;
