import * as React from 'react';
import { Pressable, Text, TextProps } from 'react-native';
// styles
import styles from './styles/FloatingTextsStyle';

interface FloatingTextsProps extends TextProps {
  // FIXME: can make that it accepts either of them, but not both
  textLeft: string;
  textRight: string;
  handleLeftPress?: () => void;
  handleRightPress?: () => void;
}

const FloatingTexts: React.FC<FloatingTextsProps> = props => {
  return (
    <>
      <Pressable
        style={[styles.pressableFloating, styles.pressableFloatingLeft]}
        onPress={props.handleLeftPress}
      >
        <Text {...props} style={[styles.text, props.style]}>
          {props.textLeft}
        </Text>
      </Pressable>
      <Pressable
        style={[styles.pressableFloating, styles.pressableFloatingRight]}
        onPress={props.handleRightPress}
      >
        <Text {...props} style={[styles.text, props.style]}>
          {props.textRight}
        </Text>
      </Pressable>
    </>
  );
};

export default FloatingTexts;
