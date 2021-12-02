import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import * as Animatable from 'react-native-animatable';
// components
import Heading from '../components/Heading';
import Logo from '../svg/Logo';
import FloatingTexts from '../components/FloatingTexts';
import AuthForm from '../components/AuthForm';
// data
import { fieldsLogin as fields } from '../data';
// styles
import styles from './styles/LoginScreenStyles';
// navigation
import { AuthFlowParamList } from '../navigation/types';
import Spacer from '../components/Spacer';
import { MARGIN } from '../constants';

type NavPropsType = NativeStackScreenProps<AuthFlowParamList, 'Login'>;

const LoginScreen: React.FC<NavPropsType> = ({ navigation }) => {
  const navigateToRegister = (): void => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('../assets/login-backgrond.png')}
        style={styles.image}
      />

      <Logo style={styles.logo} />

      <Heading />

      <Spacer margin={MARGIN / 2} />

      <AuthForm data={fields} gradientText="sign in" />

      <FloatingTexts
        textLeft="Create account"
        textRight="Need help?"
        handleLeftPress={navigateToRegister}
      />
    </View>
  );
};

export default LoginScreen;
