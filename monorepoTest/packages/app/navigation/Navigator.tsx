import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '@monorepo/reduxStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import RollCallScreen from '../screens/RollCallScreen';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// import { LogoutAction } from '../redux/actions';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const HomeStackNavigator = createStackNavigator(
  {
    HomeStack: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const RollStackNavigator = createStackNavigator(
  {
    RollCallsStack: RollCallScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const LoginStackNavigator = createStackNavigator(
  {
    LoginStack: LoginScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const HomeTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon
            name="home-outline"
            type="ionicon"
            color={tabInfo.tintColor}
            tvParallaxProperties={undefined}
          />
        ),
      },
    },
    RollCallsTab: {
      screen: RollStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Icon
            name="list-outline"
            type="ionicon"
            color={tabInfo.tintColor}
            tvParallaxProperties={undefined}
          />
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

// IMPORTANT: Have to change Drawer.js interpolate to interpolateNode
// /node_modules/react-navigation-drawer/lib/module/views/
const DrawerNavigator = createDrawerNavigator(
  {
    HomeDrawer: HomeTabNavigator,
    RollCallsDrawer: HomeTabNavigator,
  },
  {
    contentOptions: {
      activeBackgroundColor: Colors.primaryColor,
    },
    contentComponent: (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              buttonStyle={{ backgroundColor: Colors.primaryColor }}
              onPressIn={async () => {
                dispatch(LogoutAction());
                await AsyncStorage.setItem('isLoggedIn', 'false');
                props.navigation.navigate('Auth');
              }}
            />
          </SafeAreaView>
        </View>
      );
    },
  }
);

const MainNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: LoginStackNavigator,
  Home: DrawerNavigator,
});

export default createAppContainer(MainNavigator);
