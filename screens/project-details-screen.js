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
  TouchableOpacity,
  Animated
} from 'react-native';
import { styleBits, primaryColor, fullHeight, fullWidth, darkGrey } from '../utils/stylesheets';
import { BasierSquareBold, BasierSquare } from  '../utils/styled-texts';
import { FlatList } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';

export default class ProjectDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Project Details',
  };

  state ={
    fadeInImages: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeInImages, {
      toValue: 1,
      duration: 700,
      delay: 700
    }).start();
  }

  componentWillUnmount() {
    Animated.timing(this.state.fadeInImages, {
      toValue: 0,
      duration: 500,
    }).start();
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    const numColumns = 3;

    const prepareColumns = (data, numColumns) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);

      let numberOfElementsInLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsInLastRow !== numColumns && numberOfElementsInLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsInLastRow}`, empty: true });
        numberOfElementsInLastRow = numberOfElementsInLastRow + 1;
      }

      return data;
    }

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
        <View styles={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Transition delay={true} shared={`imageTransition${this.props.navigation.state.params.index}`}>
            <Image source={{uri: item.coverImage}} style={[{
              height: fullHeight * 0.08,
              width: fullHeight * 0.08,
              marginLeft: fullWidth * 0.07,
              marginTop: fullHeight * 0.05,
            }, styles.imageTransition]}/>
          </Transition>
          <View style={{
            flexDirection: 'column',
            position: 'absolute',
            top: fullHeight * 0.05,
            left: fullWidth * 0.37
          }}>
            <BasierSquareBold style={[{
              fontSize: 24,
            }]}>{item.name}</BasierSquareBold>
            <BasierSquare>
              {item.images.length} images
            </BasierSquare>
          </View>
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
        <FlatList
          style={{
            marginTop: 30,
            alignItems: 'center',
          }} data={prepareColumns(item.images, numColumns)}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => `${index}`}
          numColumns={numColumns}
        />
      </ScrollView>
    );
  }
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.imageStyles, styles.itemInvisible]}></View>
    }
    return (
      <Animated.View style={{
        opacity: this.state.fadeInImages
      }}>
        <TouchableOpacity
          title="Image"
          onPress={() => this.props.navigation.navigate('FullSizeImage', {item, index})}
          style={[ {
          }, styles.imageStyles ]}
        >
          <Transition shared={`particularImageTransition${index}`}>
            <Image source={{uri: item}} style={[{
              height: fullHeight * 0.13,
              width: fullHeight * 0.13,
              margin: 7
            }, styles.particularImageTransition]}/>
          </Transition>
        </TouchableOpacity>
      </Animated.View>
    )
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
  },
  itemInvisible: {
    backgroundCOlor: 'transparent'
  },
  imageStyles: {
  }
});

