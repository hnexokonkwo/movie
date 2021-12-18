import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { COLOR } from '../utils/constants';

interface IUiButton {
    text: string;
    onPress: () => void;
}

const UiButton = ({text, onPress}: IUiButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default UiButton;

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLOR.dark,
    borderRadius: 5,
  },
  text: {
    color: COLOR.light,
    textAlign: 'center',
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
