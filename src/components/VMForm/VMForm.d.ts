import { FormProps } from 'antd/es/form/Form';
import React from 'react';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Checkbox from 'antd/es/checkbox';
import ColorPicker from 'antd/es/color-picker';
import DatePicker from 'antd/es/date-picker';
import InputNumber from 'antd/es/input-number';
import Radio from 'antd/es/radio';
import Select from 'antd/es/select';
import Slider from 'antd/es/slider';
import Switch from 'antd/es/switch';
import Upload from 'antd/es/upload';

interface VMFormProps {
  formAttributes: Form;
  formItemAttributes: formDataType[];
}

interface formDataType extends FormProps {
  key: string | number;
  label: React.ReactNode;
  type?: inputType;
  inputProps?: inputProps;
}

type inputType =
  | 'input'
  | 'inputPassword'
  | 'inputNumber'
  | 'checkbox'
  | 'colorPicker'
  | 'select'
  | 'upload'
  | 'slider'
  | 'radio'
  | 'switch'
  | 'datePicker'
  | 'textArea'
  | 'search';

type inputProps =
  | Checkbox
  | ColorPicker
  | DatePicker
  | Form
  | Input
  | InputNumber
  | Radio
  | Select
  | Slider
  | Switch
  | Upload;
