import * as React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import KeyboardAwareScrollView from '@pietile-native-kit/keyboard-aware-scrollview';
//
import Input from './Input';
import Line from './Line';
import Text from './Text';
import { FormDataInterface } from './types';
import { height, width, SPACING, MARGIN, FORM_WIDTH } from '../constants';

const REMAINING_SPACE_AROUND_FORM = width - width * 0.7 - SPACING * 2;

interface AuthFormProps extends ViewProps {
  data: FormDataInterface[];
  gradientText?: string;
}

const AuthForm: React.FC<AuthFormProps> = props => {
  const [viewHeight, setViewHeight] = React.useState(0);

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
  };

  return (
    <View style={{ width: FORM_WIDTH }}>
      <LinearGradient
        colors={['#FF7B45', '#84C1FF']}
        style={[styles.linearGradient, { height: viewHeight + 50 }]}
        start={{
          x: 0.4,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
      >
        <Text weight="bold" style={styles.gradientText}>
          {props.gradientText}
        </Text>
      </LinearGradient>

      <View {...props} style={styles.form} onLayout={onLayout}>
        {props.data.map((field, index) => (
          <View key={field.value}>
            <Input
              label={field.label}
              placeholder={field.placeholder}
              icon={field.icon}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={field.value === 'password'}
            />
            {index !== props.data.length - 1 && (
              <View style={styles.lineWrapper}>
                <Line />
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -width * 0.05 }],
  },
  lineWrapper: {
    width: width * 0.65,
    marginVertical: 10,
  },
  linearGradient: {
    width: FORM_WIDTH,
    position: 'absolute',
    top: SPACING * 3,
    left: -SPACING * 3,
    transform: [{ translateX: width * 0.05 + SPACING * 2 }],
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SPACING,
  },
  gradientText: {
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default AuthForm;
