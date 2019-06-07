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
  TouchableOpacity
} from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth, darkGrey } from '../utils/stylesheets';
import { BasierSquareBold, BasierSquare } from  '../utils/styled-texts';
import { FlatList } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';

export default class FullSizeImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Full Size Image',
  };

  render() {
    const { navigation } = this.props;
    const image = navigation.getParam('item');

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
            height: fullHeight * 0.027,
            width: fullWidth * 0.22,
          }}/>
        </View>
        <TouchableOpacity
          title="Back"
          onPress={() => this.props.navigation.goBack()}
          style={[ {
            position: 'absolute',
            top: (fullHeight * 0.17) - 20,
            left: 20,
            backgroundColor: '#000000',
            borderRadius: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 15,
            paddingLeft: 15
          } ]}
        >
          <BasierSquareBold style={{
            color: '#ffffff'
          }}>&lt;</BasierSquareBold>
        </TouchableOpacity>
        <Transition shared={`particularImageTransition${this.props.navigation.state.params.index}`}>
          <Image source={{uri: image}} style={[{
            height:  fullWidth,
            width: fullWidth,
            marginTop: fullHeight * 0.17,
          }, styles.particularImageTransition]}/>
        </Transition>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  }
});

