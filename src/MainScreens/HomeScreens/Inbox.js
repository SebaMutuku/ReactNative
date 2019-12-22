import React from 'react';
import {View, Text} from 'react-native';
export class Inbox extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Inbox',
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Inbox</Text>
      </View>
    );
  }
}
export default Inbox;
