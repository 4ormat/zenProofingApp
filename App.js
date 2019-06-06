import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import SignInScreen from './screens/sign-in-screen';
import HomeScreen from './screens/home-screen';
import AuthLoadingScreen from './screens/auth-loading-screen';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));