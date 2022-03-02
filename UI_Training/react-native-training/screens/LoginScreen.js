import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const LoginScreen = (props) => {
  return (
    <View>
      <Header title={"Login"} />
      <View style={styles.screen}>
        <Text>The Login Screen</Text>
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

export default LoginScreen;
