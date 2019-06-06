import React from 'react';
import { Transition, createFluidNavigator } from 'react-navigation-fluid-transitions';
import WelcomeScreen from '../screens/welcome-screen';
import LoginScreen from '../screens/login-screen';
import SignupScreen from '../screens/sign-in-screen';

const WelcomeScreenNavigator = createFluidNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false,
    initialRouteName: WelcomeScreen
  }
});

// class WelcomeScreenNavigator extends React.Component {
//   static router = Navigator.router;

//   render() {
//     const { navigation } = this.props;
//     return (
//       <Navigator navigation={navigation} />
//     );
//   }
// }

export default WelcomeScreenNavigator;