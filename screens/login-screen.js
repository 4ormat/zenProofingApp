import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Image, Animated, ActivityIndicator } from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth, darkGrey } from '../utils/stylesheets';
import { BasierSquareBold, BasierSquare } from  '../utils/styled-texts';
import { Transition } from 'react-navigation-fluid-transitions';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    email: '',
    password: '',
    buttonOpacity: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.buttonOpacity, {
      toValue: 1,
      duration: 900
    }).start()
    // Animated.parallel([
    //   Animated.timing(this.state.lowerConfetti, {
    //     toValue: 0,
    //     duration: 300
    //   }),
    //   Animated.timing(this.showConfetti, {
    //     toValue: 1,
    //     duration: 300
    //   })
    // ]).start();
  }

  checkIfLoggedIn = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ height: '125%', top: -20 }} style={[ styleBits.regularScreen, styles.container]}>
        <View style={{
          backgroundColor: '#ffffff',
          height: fullHeight * 0.17
        }}></View>
        <View style={{
          alignSelf: 'center',
          position: 'absolute',
          top: fullHeight * 0.12
        }}>
          <Image source={require('../assets/images/logo-png.png')} style={{
            height: fullHeight * 0.021,
            width: fullWidth * 0.20,
          }}/>
        </View>
        <View style={{
          position: 'absolute',
          top: fullHeight * 0.17,
          left: 0,
          opacity: 0.65
        }}>
          <Image source={require('../assets/images/confetti.png')} style={{
            height: fullHeight * 0.5,
            width: fullWidth
          }}/>
        </View>
        <BasierSquareBold style={[{
          marginTop: fullHeight * 0.15
        }, styles.title ]}>
          Log In
        </BasierSquareBold>
        <BasierSquareBold style={[ styles.title ]}>
          to Format
        </BasierSquareBold>
        <TextInput
          style={[ styles.input ]}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          style={[ styles.input ]}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Transition shared='thisParticularButton'>
          <TouchableOpacity
            title="Back"
            onPress={() => this.props.navigation.goBack()}
            style={[ {
              right: -80,
            }, styles.touchableWrap, styles.thisParticularButton ]}
          >
            <Transition shared='backButton' appear='scale'>
              <BasierSquareBold style={[ {
                textAlign: 'left',
                paddingLeft: 15
              }, styleBits.primaryScreenText, styles.touchableText, styles.backButton ]}>
                Back >
              </BasierSquareBold>
            </Transition>
          </TouchableOpacity>
        </Transition>
        <TouchableOpacity
            title="Login"
            onPress={() => this.props.navigation.navigate('Home')}
            style={[ {
            }, styles.loginButton ]}
          >
            <BasierSquareBold style={[ {
              textAlign: 'center',
              color: '#ffffff'
            }, styles.touchableText ]}>
               Log in
            </BasierSquareBold>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    position: 'relative'
  },
  topRect: {
    backgroundColor: '#ffffff'
  },
  blackRect: {
    backgroundColor: '#000000',
    width: fullWidth * 0.8,
    height: 345,
    marginTop: 123,
    alignSelf: 'center',
  },
  blackRectText: {
    color: primaryColor,
    fontSize: 54,
    position: 'absolute',
    top: 25,
    left: 32
  },
  blackRectText2: {
    top: 88
  },
  touchableWrap: {
    marginLeft: 30,
    width: 200,
    position: 'absolute',
    bottom: fullHeight * 0.35,
    borderRadius: 30,
    backgroundColor: '#000000',
    padding: 20
  },
  loginButton: {
    marginLeft: fullWidth * 0.2,
    width: 150,
    position: 'absolute',
    bottom: fullHeight * 0.35,
    left: fullWidth * 0.02,
    borderRadius: 30,
    backgroundColor: '#8dbda4',
    padding: 20
  },
  touchableText: {
    fontSize: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 35
  },
  input: {
    marginTop: fullHeight * 0.04,
    alignSelf: 'center',
    width: fullWidth * 0.65,
    borderBottomColor: '#000000',
    borderWidth: 0,
    borderRadius: 7,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 21,
    color: darkGrey,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 5,
    shadowColor: darkGrey,
    shadowOpacity: 0.3
  }
});
