import React from 'react';
import { Text } from 'react-native';

export class BasierSquare extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'basierSquare' }]} />;
  }
}

export class BasierSquareBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'basierSquare-bold' }]} />;
  }
}

export class BasierSquareItalic extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'basierSquare-italic' }]} />;
  }
}
