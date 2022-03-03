import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';

const HomeScreen = (props) => {
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
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
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
