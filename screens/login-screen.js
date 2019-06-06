import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Image, Animated, ActivityIndicator } from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth } from '../utils/stylesheets';
import { BasierSquareBold } from  '../utils/styled-texts';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    
  }

  componentDidMount() {
    
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
        <View style={[{
        }, styles.blackRect]}>
          <BasierSquareBold style={styles.blackRectText}>
            Login
          </BasierSquareBold>
          <BasierSquareBold style={[styles.blackRectText, styles.blackRectText2]}>
            Screen
          </BasierSquareBold>
        </View>
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
