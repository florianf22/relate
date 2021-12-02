import * as React from 'react';
import { Text, View, StyleSheet, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  weight?: 'bold' | 'normal';
}

const CustomText: React.FC<CustomTextProps> = props => {
  const fontFamily =
    props.weight === 'bold' ? 'Montserrat_700Bold' : 'Montserrat_400Regular';

  return (
    <Text {...props} style={[props.style, { fontFamily }]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
