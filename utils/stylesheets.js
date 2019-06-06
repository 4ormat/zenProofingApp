import { StyleSheet, Dimensions } from 'react-native';

export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;

export const primaryColor = '#f0eae9'; // Light Grey

const primaryTextColor = "#ffffff";
const secondaryTextColor = "#000000";

export const styleBits = StyleSheet.create({
  regularScreen: {
    backgroundColor: primaryColor,
  },
  primaryScreenText: {
    color: primaryTextColor
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonOutline: {
    borderColor: primaryTextColor,
    borderWidth: 3,
    borderRadius: 15,
    padding: 15,
    backgroundColor: primaryColor,
    color: primaryTextColor,
    maxWidth: 300,
    minWidth: 50,
    alignItems: 'center'
  }
});