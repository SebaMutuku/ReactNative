import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { createAppContainer } from "react-navigation";
import Home from "../MainScreens/Home";
import LinksScreen from "../MainScreens/LinksScreen";
import Settings from "../MainScreens/Settings";
import { DrawerItems } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
var { height, width } = Dimensions.get("window");

const DrawerNavigator = createDrawerNavigator(
  {
    HomeStack: Home,

    Links: LinksScreen,

    Settings: Settings
  },
  {
    contentComponent: HomeOptions
  },

  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const HomeOptions = props => {
  <SafeAreaView>
    <View style={{ height: 150, backgroundColor: "black" }}></View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>;
};
const HomeContainer = createAppContainer(DrawerNavigator);
export default class HomeDrawerNavigation extends React.Component {
  render() {
    return <HomeContainer />;
  }
}
