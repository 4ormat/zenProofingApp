import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Button,
  View,
} from 'react-native';
import axios from 'axios';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  serializeFormState = () => {
    return {
      email: "olaolaola@ola.com",
      password: "oliczek1",
    };
  }

  _signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');

    axios.post("http://www.formatportfolio.com:3000/session", this.serializeFormState())
    .then(e => {
      console.log("we shall see what we shall see", e);
      if (e.request.responseURL === "http://www.formatportfolio.com:3000/login") {
        console.log("some error here");
      } else {
        this.props.navigation.navigate('App');
      }
    })
    .catch(e => {
      console.log("there has been an error man", e);
    });
  };
}
