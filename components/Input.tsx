import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//
import { height, width, SPACING, PADDING } from '../constants';
import { AuthFormIconType } from './types';

interface InputProps extends TextInputProps {
  label: string;
  icon: AuthFormIconType;
}

const Input: React.FC<InputProps> = props => {
  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} {...props} />

          <Ionicons
            name={props.icon}
            size={18}
            color="#000"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: SPACING,
    // padding bottom is reduced because of the line
    paddingBottom: SPACING / 2,
    backgroundColor: '#fff',
  },
  inputContainer: {},
  label: {
    fontSize: 12,
    color: '#aaa',
    textTransform: 'uppercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    width: width * 0.7,
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    paddingVertical: PADDING,
    width: width * 0.6,
  },
  icon: {
    transform: [{ translateY: -4.5 }],
  },
});

export default Input;
