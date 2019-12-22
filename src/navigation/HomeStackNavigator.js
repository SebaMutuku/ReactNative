import React from "react";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeDrawerNavigation from "../navigation/HomeDrawerNavigation";
import HomeSwitchNavigator from "../navigation/HomeSwitchNavigator";
import { createAppContainer } from "react-navigation";

export class HomeStackNavigator extends React.Component {
  render() {
    return <HomeAppContainer />;
  }
}

const HomeStack = createStackNavigator({
  Main: {
    screen: HomeDrawerNavigation,
    navigationOptions: ({ navigation }) => {
      headerLeft: <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      ></TouchableOpacity>;
    },
    headerStyle: { paddingRight: 10, paddingLeft: 15 }
  },
  Other: {
    screen: HomeSwitchNavigator,
    navigationOptions: ({ navigation }) => {
      HeaderTitle: "Other";
    }
  }
});
const HomeAppContainer = createAppContainer(HomeStack);
export default HomeStackNavigator;
