import React, { Component } from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View, // Container component
  ToastAndroid,
  Keyboard,
  AppRegistry,
  KeyboardAvoidingView
} from "react-native";
import UserComponent from "../components/UserComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

//import Spinner from "react-native-loading-spinner-overlay";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  async logUserIn() {
    const { Username, Password } = this.state;

    if (Username === "" && Password === "") {
      ToastAndroid.show("Please enter all fields", ToastAndroid.LONG);
    } else if (Username == "") {
      ToastAndroid.show("Username cannot be empty", ToastAndroid.LONG);
    } else if (Password == "") {
      ToastAndroid.show("Password Cannot be Empty", ToastAndroid.LONG);
    }
    Keyboard.dismiss();
    new UserComponent().AsyncLogin(Username, Password);
    let token = AsyncStorage.getItem("AccessToken");
    //let token = await AsyncStorage.getItem("authorization");
    //let token = this.state.Token;
    console.log("token: " + token);
    if (token != null) {
      this.props.navigation.navigate("Landing");
      ToastAndroid.show("Successfully logged In", ToastAndroid.LONG);
    } else {
      ToastAndroid.show("Invalid Credentials", ToastAndroid.LONG);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.subtext}>User Login</Text>
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Enter Username: "
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.PasswordInput.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.Username}
                onChangeText={Username => this.setState({ Username })}
              />
            </View>
            <View style={styles.window}>
              <TextInput
                placeholder="Enter Password: "
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.PasswordInput = input)}
                value={this.state.Password}
                onChangeText={Password => this.setState({ Password })}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.logUserIn.bind(this)}
              disabled={!this.state.Username || !this.state.Password}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up"
          >
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("ResetPassword")}
            title="Forget Password"
          >
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
