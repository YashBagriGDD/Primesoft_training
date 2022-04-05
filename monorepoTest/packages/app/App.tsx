import React from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { configureStore } from '@monorepo/reduxStore';
import StorybookUIRoot from '@monorepo/component/storybook';
import Navigator from './navigation/Navigator';
// import configureStore from './redux/store';

enableScreens();

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StorybookUIRoot />
      {/* <Navigator /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
