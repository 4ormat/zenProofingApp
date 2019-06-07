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
    password: ''
  }

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
            height: fullHeight * 0.022,
            width: fullHeight * 0.10,
          }}/>
        </View>
        <View style={{
          position: 'absolute',
          bottom: fullHeight * 0.53,
          right: 0,
          opacity: 0.75
        }}>
          <Image source={require('../assets/images/meditate.png')} style={{
            height: fullHeight * 0.5,
            width: fullWidth,
          }}/>
        </View>
        <BasierSquareBold style={[{
          marginTop: fullHeight * 0.15
        }, styles.title ]}>
          Sign up
        </BasierSquareBold>
        <BasierSquareBold style={[ styles.title ]}>
          for a free
        </BasierSquareBold>
        <BasierSquareBold style={[ styles.title ]}>
          Format account
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
        <Transition shared='thisParticularOtherButton'>
          <TouchableOpacity
            title="Back"
            onPress={() => this.props.navigation.goBack()}
            style={[ {
              left: -120
            }, styles.touchableWrap, styles.thisParticularOtherButton ]}
          >
            <Transition shared='backButton' appear='scale'>
              <BasierSquareBold style={[ {
                textAlign: 'center',
                fontSize: 20,
                paddingLeft: 50,
              }, styleBits.primaryScreenText, styles.backButton ]}>
                &lt; Back
              </BasierSquareBold>
            </Transition>
          </TouchableOpacity>
        </Transition>
        <TouchableOpacity
            title="Sign up"
            onPress={() => this.props.navigation.navigate('Home')}
            style={[ {
            }, styles.signInButton ]}
          >
            <BasierSquareBold style={[ {
              textAlign: 'left',
              color: darkGrey
            }, styles.touchableText ]}>
               Sign Up
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
  touchableWrap: {
    marginLeft: 30,
    width: 200,
    position: 'absolute',
    bottom: fullHeight * 0.35,
    borderRadius: 30,
    backgroundColor: '#000000',
    padding: 20
  },
  touchableText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  signInButton: {
    position: 'absolute',
    bottom: fullHeight * 0.35,
    right: fullWidth * 0.17,
    borderRadius: 30,
    backgroundColor: '#fed669',
    padding: 20
  },
  title: {
    alignSelf: 'center',
    fontSize: fullHeight * 0.038
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
