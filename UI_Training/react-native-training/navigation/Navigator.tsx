import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import RollCallScreen from '../screens/RollCallScreen';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const HomeStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const RollStackNavigator = createStackNavigator(
  {
    RollCalls: RollCallScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon name="home-outline" type="ionicon" color={tabInfo.tintColor} />
        ),
      },
    },
    RollCalls: {
      screen: RollStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon name="list-outline" type="ionicon" color={tabInfo.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

const RollsTabNavigator = createBottomTabNavigator(
  {
    RollCalls: {
      screen: RollStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon name="list-outline" type="ionicon" color={tabInfo.tintColor} />
        ),
      },
    },
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon name="home-outline" type="ionicon" color={tabInfo.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: HomeTabNavigator,
  RollCalls: RollsTabNavigator,
});

export default createAppContainer(DrawerNavigator);
