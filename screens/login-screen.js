import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Image, Animated, ActivityIndicator } from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth } from '../utils/stylesheets';
import { BasierSquareBold } from  '../utils/styled-texts';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    growFromTop: new Animated.Value(0),  // Initial value for height: 0
    moveLogo: new Animated.Value(fullHeight * 0.44),
    hideLogo: new Animated.Value(1),
    showLogo: new Animated.Value(0),
    showRectangle: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.growFromTop, {
        toValue: fullHeight * 0.17,
        duration: 1000,
      }),
      Animated.timing(this.state.moveLogo, {
        toValue: fullHeight * 0.12,
        duration: 900
      }),
      Animated.sequence([
        Animated.timing(this.state.hideLogo, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(this.state.showLogo, {
          toValue: 1,
          duration: 200,
          delay: 500
        }),
        Animated.timing(this.state.showRectangle, {
          toValue: 1,
          duration: 200
        })
      ])
      
    ]).start()
  }

  checkIfLoggedIn = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ height: '125%', top: -20 }} style={[ styleBits.regularScreen, styles.container]}>
        <Animated.View style={{
          backgroundColor: '#ffffff',
          height: this.state.growFromTop
        }}></Animated.View>
        <Animated.View style={{
          alignSelf: 'center',
          position: 'absolute',
          top: fullHeight * 0.44,
          opacity: this.state.hideLogo
        }}>
          <Image source={require('../assets/images/logo-png.png')} style={{
            height: fullHeight * 0.061,
            width: fullWidth * 0.59,
          }}/>
        </Animated.View>
        <Animated.View style={{
          alignSelf: 'center',
          position: 'absolute',
          top: fullHeight * 0.12,
          opacity: this.state.showLogo
        }}>
          <Image source={require('../assets/images/logo-png.png')} style={{
            height: fullHeight * 0.021,
            width: fullWidth * 0.20,
          }}/>
        </Animated.View>
        <Animated.View style={[{
          opacity: this.state.showRectangle
        }, styles.blackRect]}>
          <BasierSquareBold style={styles.blackRectText}>
            Zen
          </BasierSquareBold>
          <BasierSquareBold style={[styles.blackRectText, styles.blackRectText2]}>
            Proofing
          </BasierSquareBold>
        </Animated.View>
        <TouchableOpacity
          title="Login"
          onPress={() => this.checkIfLoggedIn()}
          style={[ styles.touchableWrap, styleBits.buttonOutline]}
        >
          <BasierSquareBold style={[ styleBits.primaryScreenText, styles.touchableText ]}>
            I want to see a pretty pretty text here
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
    display: 'none'
  },
  touchableText: {
    fontSize: 23,
  }
});
