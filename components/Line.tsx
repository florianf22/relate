import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const Line: React.FC = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#e6e6e6',
    alignSelf: 'center',
  },
});

export default Line;
