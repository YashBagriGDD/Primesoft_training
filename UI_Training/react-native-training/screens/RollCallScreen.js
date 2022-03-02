import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const RollCallScreen = (props) => {
  return (
    <View>
      <Header title={"Rolls Calls"} />
      <View style={styles.screen}>
        <Text>The Roll Calls Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RollCallScreen;
