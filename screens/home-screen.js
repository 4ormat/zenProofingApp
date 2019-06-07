import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Animated
} from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth, darkGrey } from '../utils/stylesheets';
import { BasierSquareBold, BasierSquare } from  '../utils/styled-texts';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { projects } from '../utils/projects-list';
import { Transition } from 'react-navigation-fluid-transitions';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  state ={
    fadeItem: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeItem, {
      toValue: 1,
      duration: 500,
      delay: 500
    }).start();
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
        <BasierSquareBold style={[ styles.title ]}>
          All My Proofing Projects
        </BasierSquareBold>
        <FlatList
          style={{
            marginTop: 10
          }} data={projects}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => `${index}`}
        />
      </ScrollView>
    );
  }

  renderItem = ({ item, index }) => (
    <Animated.View style={{
      opacity: this.state.fadeItem
    }}>
      <TouchableOpacity
        title="Project details"
        onPress={() => this.props.navigation.navigate('ProjectDetails', {item, index})}
        style={[ {
        }, styles.signInButton ]}
      >
        <View style={{
          paddingTop: 10,
          paddingBottom: 10,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          borderRadius: 8,
          borderLeftWidth: 8,
          borderLeftColor: '#8dbda4',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 20,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 5,
          shadowColor: darkGrey,
          shadowOpacity: 0.3
        }}>
          <Transition shared={`imageTransition${index}`}>
            <Image source={{uri: item.coverImage}} style={[{
              height: fullHeight * 0.10,
              width: fullWidth * 0.2,
              marginLeft: 15
            }, styles.imageTransition]}/>
          </Transition>
          <View style={{
            flexDirection: 'column',
            paddingLeft: fullWidth * 0.1
          }}>
            <BasierSquareBold style={[{
              fontSize: 16,
            }]}>{item.name}</BasierSquareBold>
            <BasierSquare>
              {item.images.length} images
            </BasierSquare>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
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
    fontSize: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 15
  }
});

