export type AuthFormIconType =
  | 'person'
  | 'key'
  | 'analytics-outline'
  | 'mail-open-outline';
export type FormFieldsValueType = 'email' | 'password' | 'name';

export interface FormDataInterface {
  label: string;
  value: FormFieldsValueType;
  icon: AuthFormIconType;
  placeholder: string;
}
