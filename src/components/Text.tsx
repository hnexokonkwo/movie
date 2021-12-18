import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FontWeight } from '../styles';
import { COLOR } from '../utils/constants';

interface IProps {
    text: string;
    color?: string, 
}

export const Headings = ({text, color = COLOR.light}: IProps) => {
  return <Text style={[styles.heading, FontWeight.w600, {color}]}>{text}</Text>;
};

const styles = StyleSheet.create({
    heading: {
        marginTop: 20,
    }
})