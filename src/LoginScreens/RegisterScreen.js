import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  AsyncStorage,
  Platform,
  ToastAndroid,
} from 'react-native';
import {tsCallSignatureDeclaration} from '@babel/types';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      email: '',
      Password: '',
      Password_confirmation: '',
    };
  }
  async register() {
    const {Username, email, Password, Password_confirmation} = this.state;
    if (
      Username == '' ||
      email == '' ||
      Password == '' ||
      Password_confirmation == ''
    ) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('All Fields are Mandatory', ToastAndroid.LONG);
      } else {
        alert('Successfully registered');
      }
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
  };

  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.subtext}>Sign Up:</Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput
            value={this.state.Username}
            onChangeText={Username => this.setState({Username})}
            style={styles.input}
            placeholder="Enter Username: "
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => this.UsernameInput.focus()}
          />
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.UsernameInput = input)}
            onSubmitEditing={() => this.PasswordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Email:"
          />
          <TextInput
            value={this.state.Password}
            onChangeText={Password => this.setState({Password})}
            style={styles.input}
            placeholder="Enter Password:"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={input => (this.PasswordCInput = input)}
            onSubmitEditing={() => this.PasswordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            value={this.state.Password}
            onChangeText={Password_confirmation =>
              this.setState({Password_confirmation})
            }
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.PasswordInput = input)}
          />
        </KeyboardAvoidingView>
        <TouchableHighlight
          onPress={this.register.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#16a085',
    padding: 20,
    paddingTop: 100,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  },
  subtext: {
    color: '#ffffff',
    width: 160,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

AppRegistry.registerComponent('Register', () => Register);
