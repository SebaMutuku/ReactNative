import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../LoginScreens/LoginScreen";
import RegisterScreen from "../LoginScreens/RegisterScreen";
import ResetPassword from "../LoginScreens/ResetPassword";
import HomeStackNavigator from "./HomeStackNavigator";
const ChangeLoginScreen = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  ResetPassword: {
    screen: ResetPassword
  },
  Landing: HomeStackNavigator
});
const LoginNav = createAppContainer(ChangeLoginScreen);
export default LoginNav;
