import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { Toast } from "native-base";
const authorization = "";
import { ToastAndroid } from "react-native";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      StateMessage: "",
      Token: ""
    };
  }
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    this.AsyncLogin(this.state.Username, this.state.Password);
  }
  componentWillMount() {
    this._isMounted = false;
  }

  AsyncLogin(Username, Password) {
    let resp, token;
    var body = JSON.stringify({
      username: this.state.Username,
      password: this.state.Password
    });
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    try {
      const response = axios.post("http://440f11d5.ngrok.io/api/login/", {
        username: Username,
        password: Password
      });
      console.log("Data.....", username, password);
      resp = response.data;
      if (resp.status == 200) {
        token = response.data.token;
        console.log("......Token.......", token);
        this.setToken(token);
        this.setState({ Token: token });
        this.setState({ StateMessage: resp.message });
      } else {
        if (axios.isCancel) {
          this.setState({ StateMessage: error });
        } else {
          throw error;
        }
      }
    } catch (error) {
      //this.setState({ StateMessage: error });
    }

    return token;
  }
  async getToken() {
    const token = "";
    try {
      token = await AsyncStorage.getItem(authorization);
    } catch (error) {
      //this.setState({ StateMessage: error });
    }
    return resp.token;
  }
  async removeToken() {
    try {
      await AsyncStorage.removeItem(AccessToken);
    } catch (error) {}
  }
  async setToken(token) {
    try {
      await AsyncStorage.setItem(AccessToken, token);
    } catch (error) {}
  }
}
const AccessToken = "";
export default UserComponent;
