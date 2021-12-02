import { StyleSheet } from 'react-native';
// constants
import { COLORS, MARGIN, SPACING, FORM_WIDTH, height } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: SPACING * 2,
  },
  navbar: {
    width: '85%',
    marginHorizontal: '7.5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.text,
    marginLeft: MARGIN,
  },
  pressableRight: {
    marginLeft: 'auto',
  },
  image: {
    width: FORM_WIDTH,
    height: height * 0.3,
    resizeMode: 'cover',
    transform: [{ translateY: SPACING * 3 }, { translateX: 0 }],
  },
});
