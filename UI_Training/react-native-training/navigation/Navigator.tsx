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

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    RollCalls: RollCallScreen,
    Login: LoginScreen,
  },
  {
    // Using Platform.OS resulted in an undefined break here
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon name="home-outline" type="ionicon" color={tabInfo.tintColor} />
        ),
      },
    },
    RollCalls: {
      screen: RollCallScreen,
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

export default createAppContainer(TabNavigator);
