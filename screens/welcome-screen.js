import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Image, Animated, ActivityIndicator } from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth } from '../utils/stylesheets';
import { BasierSquareBold, BasierSquare } from  '../utils/styled-texts';
import { Transition } from 'react-navigation-fluid-transitions';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  customFadeTransition = (transitionInfo) => {
    const { progress, start, end } = transitionInfo;
    const opacityInterpolation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [1, start, end, 0],
    });
    return { opacity: opacityInterpolation };
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
          top: fullHeight * 0.12,
        }}>
          <Image source={require('../assets/images/logo-png.png')} style={{
            height: fullHeight * 0.022,
            width: fullHeight * 0.10,
          }}/>
        </View>
        <Transition appear='top' disappear='flip' shared='thisParticularRect'>
          <View style={[{
          }, styles.blackRect]}>
            <BasierSquareBold style={styles.blackRectText}>
              Zen
            </BasierSquareBold>
            <BasierSquareBold style={[styles.blackRectText, styles.blackRectText2]}>
              Proofing
            </BasierSquareBold>
          </View>
        </Transition>
        <Transition appear='left' shared='thisParticularButton'>
          <TouchableOpacity
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
            style={[ {
              left: -120,
            }, styles.touchableWrap, styles.thisParticularButton ]}
          >
            <BasierSquareBold style={[ {
              textAlign: 'right',
            }, styleBits.primaryScreenText, styles.touchableText, styles.backButton ]}>
              Log in
            </BasierSquareBold>
          </TouchableOpacity>
        </Transition>
        <Transition appear='right' shared='thisParticularOtherButton'>
          <TouchableOpacity
            title="Signup"
            onPress={() => this.props.navigation.navigate('Signup')}
            style={[ {
              right: -80,
              textAlign: 'left'
            }, styles.touchableWrap, styles.thisParticularOtherButton ]}
          >
            <BasierSquareBold style={[ styleBits.primaryScreenText, styles.touchableText ]}>
              Sign up
            </BasierSquareBold>
          </TouchableOpacity>
        </Transition>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  topRect: {
    backgroundColor: '#ffffff'
  },
  blackRect: {
    backgroundColor: '#000000',
    width: fullWidth * 0.8,
    height: fullHeight * 0.35,
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
    paddingTop: 20,
    paddingBottom: 20,
  },
  touchableText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
