import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigation/Navigator';

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
