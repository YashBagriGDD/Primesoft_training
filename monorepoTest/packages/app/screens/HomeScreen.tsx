import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import Header from '../components/Header';
// import HeaderButton from '../components/HeaderButton';
import { Header, HeaderButton } from '@monorepo/component';

const HomeScreen: JSX.Element = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.screen}>
        <Text>The Home Screen</Text>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Home',
    headerLeft: () => (
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

export default HomeScreen;
