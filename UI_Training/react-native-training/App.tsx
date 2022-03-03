import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigation/Navigator.jsx';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
