import { StyleSheet } from 'react-native';
// constants
import { SPACING } from '../../constants';

export default StyleSheet.create({
  pressableFloating: {
    position: 'absolute',
    bottom: SPACING * 2,
  },
  pressableFloatingLeft: {
    left: SPACING,
  },
  pressableFloatingRight: {
    right: SPACING,
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 12,
  },
});
