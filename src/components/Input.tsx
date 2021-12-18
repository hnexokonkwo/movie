import React, {FC} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLOR} from '../utils/constants';

interface IInput {
  label?: string;
  suffix?: string;
}

const Input: FC<IInput & Record<string, any>> = ({label, suffix, ...rest}) => {
  return (
    <View>
      {label && (
        <Text style={styles.label}>
          <Text>{label}</Text>
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              width: suffix ? '90%' : '100%',
            },
          ]}
          {...rest}
        />
        {suffix && <Icon name={suffix} size={24} color={COLOR.dark} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    marginBottom: 16,
  },
  suffix: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: COLOR.light,
  },
  label: {
    textTransform: 'uppercase',
    color: COLOR.light,
    marginBottom: 4,
    fontSize: 12,
  },
});

export default Input;
