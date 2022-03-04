import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const DetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Details" />
      <View style={styles.screen}>
        <Text>The Details Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
