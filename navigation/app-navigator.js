import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreenNavigator from '../navigation/welcome-navigator';
import AnimatedWelcomeScreen from '../screens/animated-welcome-screen';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));

const AppSwitchNavigator = createSwitchNavigator({
  AnimatedWelcomeScreen: { screen: AnimatedWelcomeScreen },
  WelcomeScreenNavigator: { screen: WelcomeScreenNavigator },
}, {
  initialRouteName: 'AnimatedWelcomeScreen',
});

export default createAppContainer(AppSwitchNavigator);
