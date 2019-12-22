import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Header, Left, Right } from "native-base";
import { Icon } from "react-native-elements";

export default function LinksScreen() {
  return (
    <View>
      <Header>
        <Left>
          <Icon
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          ></Icon>
        </Left>
      </Header>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
