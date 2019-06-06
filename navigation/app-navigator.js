import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/login-screen';
import HomeScreen from '../screens/home-screen';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen }
});

export default createAppContainer(AppSwitchNavigator);
