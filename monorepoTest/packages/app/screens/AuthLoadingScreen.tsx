import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

const AuthLoadingScreen = (props) => {
  const loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    props.navigation.navigate(isLoggedIn !== 'true' ? 'Auth' : 'Home');
  };

  useEffect(() => {
    loadData();
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AuthLoadingScreen;
