import React from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Navigator from './navigation/Navigator';

enableScreens();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App(): JSX.Element {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
