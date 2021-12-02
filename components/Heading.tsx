import * as React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { width } from '../constants';
//
import Text from './Text';

interface HeadingProps extends ViewProps {}

const LETTERS = ['R', 'E', 'L', 'A', 'T', 'E'];

const Heading: React.FC<HeadingProps> = props => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      {LETTERS.map((letter, index) => (
        <Text key={index} style={styles.text} weight="bold">
          {letter}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 70,
    opacity: 0.5,
  },
});

export default Heading;
