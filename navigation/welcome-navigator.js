import React from 'react';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import WelcomeScreen from '../screens/welcome-screen';
import LoginScreen from '../screens/login-screen';
import SignupScreen from '../screens/sign-in-screen';
import HomeScreen from '../screens/home-screen';
import ProjectDetailsScreen from '../screens/project-details-screen';
import FullSizeImageScreen from '../screens/full-size-image-screen';

const Navigator = FluidNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: HomeScreen },
  ProjectDetails: { screen: ProjectDetailsScreen },
  FullSizeImage: { screen: FullSizeImageScreen }
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false,
    initialRouteName: WelcomeScreen
  }
});

class WelcomeScreenNavigator extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator navigation={navigation} />
    );
  }
}

export default WelcomeScreenNavigator;
