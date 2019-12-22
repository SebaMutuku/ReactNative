import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
  };

  onForgetPress() {
    const {Email} = this.state;
    if (Email == '') {
      ToastAndroid.show('Please enter a valid email', ToastAndroid.BOTTOM);
    } else {
      ToastAndroid.show(
        'A reset password has been sent to your email\nPlease check your email',
        ToastAndroid.LONG,
      );
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Email:"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.Email}
          onChangeText={Email => this.setState({Email})}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onForgetPress.bind(this)}>
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: 'flex-start',
    backgroundColor: '#16a085',
    padding: 20,
    paddingTop: 100,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  },
});
