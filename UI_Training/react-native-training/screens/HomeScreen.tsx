import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

const HomeScreen: JSX.Element = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.screen}>
        <Text>The Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            props.navigation.navigate({ routeName: 'Details' });
          }}
        />
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
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

export default HomeScreen;
