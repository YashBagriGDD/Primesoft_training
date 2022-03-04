import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';

const RollCallScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Rolls Calls" />
      <View style={styles.screen}>
        <Text>The Roll Calls Screen</Text>
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

RollCallScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Roll Calls',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
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

export default RollCallScreen;
