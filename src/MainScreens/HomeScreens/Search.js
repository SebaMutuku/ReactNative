import React from 'react';
import {View, Text} from 'react-native';
export class Search extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Search',
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Search</Text>
      </View>
    );
  }
}
export default Search;
