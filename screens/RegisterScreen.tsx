import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
// styles
import styles from './styles/RegisterScreenStyles';
// constants
import { GRADIENTS, COLORS, height } from '../constants';
// components
import Text from '../components/Text';
import AuthForm from '../components/AuthForm';
// data
import { fieldsRegister } from '../data';
// navigation
import { AuthFlowParamList } from '../navigation/types';
// hooks
import useCamera from '../hooks/useCamera';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

type NavProps = NativeStackScreenProps<AuthFlowParamList, 'Register'>;

const RegisterScreen: React.FC<NavProps> = ({ navigation }) => {
  const translateY = useSharedValue(0);
  const shouldClose = useDerivedValue(() => {
    return translateY.value > height / 2;
  });
  const { pickImage } = useCamera();

  const navigateToLogin = (): void => {
    navigation.navigate('Login');
  };

  const rStyle = useAnimatedStyle(() => {
    let opacity = interpolate(translateY.value, [0, height], [1, 0.8]);

    if (shouldClose.value) {
      opacity = withTiming(0.6);
    }

    return {
      transform: [{ translateY: translateY.value }],
      opacity,
    };
  });

  const handlePanGesture =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: (event, ctx) => {
        translateY.value = event.translationY;
      },
      onEnd: (event, ctx) => {
        if (shouldClose.value) {
          runOnJS(navigateToLogin)();
        }

        translateY.value = withTiming(0);
      },
    });

  return (
    <PanGestureHandler onGestureEvent={handlePanGesture}>
      <AnimatedLinearGradient
        colors={GRADIENTS.blackToGray}
        style={[styles.container, rStyle]}
        locations={[0.2, 1]}
      >
        <View style={styles.navbar}>
          <Pressable onPress={navigateToLogin}>
            <Ionicons name="close" size={30} color={COLORS.text} />
          </Pressable>
          <Text style={styles.text}>SIGN UP</Text>
          <Pressable style={styles.pressableRight} onPress={pickImage}>
            <FontAwesome name="photo" size={24} color={COLORS.text} />
          </Pressable>
        </View>
        {/* eslint-disable-next-line global-require */}
        <Image source={require('../assets/avatar.png')} style={styles.image} />
        <AuthForm data={fieldsRegister} gradientText="Next Step" />
      </AnimatedLinearGradient>
    </PanGestureHandler>
  );
};

export default RegisterScreen;
