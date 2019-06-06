import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Image, Animated, ActivityIndicator } from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth } from '../utils/stylesheets';
import { BasierSquareBold } from  '../utils/styled-texts';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
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
          top: fullHeight * 0.12,
        }}>
          <Image source={require('../assets/images/logo-png.png')} style={{
            height: fullHeight * 0.021,
            width: fullWidth * 0.20,
          }}/>
        </View>
        <View style={[{
        }, styles.blackRect]}>
          <BasierSquareBold style={styles.blackRectText}>
            Zen
          </BasierSquareBold>
          <BasierSquareBold style={[styles.blackRectText, styles.blackRectText2]}>
            Proofing
          </BasierSquareBold>
        </View>
        <TouchableOpacity
          title="Login"
          onPress={() => this.checkIfLoggedIn()}
          style={[ {
            left: -120,
          }, styles.touchableWrap ]}
        >
          <BasierSquare style={[ {
            textAlign: 'right',
          }, styleBits.primaryScreenText, styles.touchableText ]}>
            Login
          </BasierSquare>
        </TouchableOpacity>
        <TouchableOpacity
          title="Login"
          onPress={() => this.checkIfLoggedIn()}
          style={[ {
            right: -80,
            textAlign: 'left'
          }, styles.touchableWrap ]}
        >
          <BasierSquare style={[ styleBits.primaryScreenText, styles.touchableText ]}>
            Signup
          </BasierSquare>
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
    position: 'absolute',
    bottom: fullHeight * 0.35,
    borderRadius: 30,
    backgroundColor: '#000000',
    padding: 20
  },
  touchableText: {
    fontSize: 23,
  }
});
