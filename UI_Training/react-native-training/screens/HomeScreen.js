import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const HomeScreen = (props) => {
  return (
    <View>
      <Header title={"Home"} />
      <View style={styles.screen}>
        <Text>The Home Screen</Text>
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

export default HomeScreen;
