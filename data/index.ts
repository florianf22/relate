import { FormDataInterface } from '../components/types';

export const fieldsLogin: FormDataInterface[] = [
  {
    label: 'Username',
    placeholder: 'example@gmail.com',
    icon: 'person',
    value: 'email',
  },
  {
    label: 'Password',
    placeholder: '********',
    icon: 'key',
    value: 'password',
  },
];

export const fieldsRegister: FormDataInterface[] = [
  {
    label: 'Name',
    placeholder: 'Your Name',
    icon: 'analytics-outline',
    value: 'name',
  },
  {
    label: 'Email',
    placeholder: 'example@gmail.com',
    icon: 'mail-open-outline',
    value: 'email',
  },
  {
    label: 'Password',
    placeholder: '********',
    icon: 'key',
    value: 'password',
  },
];
