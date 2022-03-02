import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import RollCallScreen from "../screens/RollCallScreen";

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  RollCalls: RollCallScreen,
});

export default createAppContainer(StackNavigator);
