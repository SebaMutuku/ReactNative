import React from "react";
import { StyleSheet } from "react-native";
import { View, Header, Left, Right } from "native-base";
import { Icon } from "react-native-elements";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon
              title="Home"
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            ></Icon>
          </Left>
        </Header>
      </View>
    );
  }
}
