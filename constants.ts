import { Dimensions } from 'react-native';

// dimensions and width, height values
const { width, height } = Dimensions.get('window');

const SPACING = 20;
const PADDING = 10;
const MARGIN = 20;
const FORM_WIDTH = width * 0.8;

export { width, height, SPACING, PADDING, MARGIN, FORM_WIDTH };

// colors and gradients
const COLORS = {
  text: '#fff',
  background: '#000',
};

const GRADIENTS = {
  blackToGray: ['#000', '#686868'],
};

export { COLORS, GRADIENTS };
