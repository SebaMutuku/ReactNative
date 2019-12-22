import React from "react";
import { SafeAreaView, ScrollView, Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import FirstHome from "../MainScreens/HomeScreens/FirstHome";
import Inbox from "../MainScreens/HomeScreens/Inbox";
import Search from "../MainScreens/HomeScreens/Search";
import { createBottomTabNavigator } from "react-navigation-tabs";

var { height, width } = Dimensions.get("window");

const BottomNavigator = createBottomTabNavigator(
  {
    Home: FirstHome,

    Search: Search,

    Messages: Inbox
  },
  {
    initialRouteName: "Home"
  }
);

const HomeBottonNav = createAppContainer(BottomNavigator);
export default class HomeSwitchNavigator extends React.Component {
  render() {
    return <HomeBottonNav />;
  }
}
