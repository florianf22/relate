import { StyleSheet } from 'react-native';
// constants
import { width, height, SPACING } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: SPACING * 3,
  },
  image: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
  },
  logo: {
    transform: [{ scale: 0.6 }],
  },
});
