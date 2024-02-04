import React, { memo } from 'react';
import {
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  Upload,
} from 'antd';
import { VMFormProps } from './VMForm';

const Index = memo((props: VMFormProps) => {
  const { formItemAttributes, formAttributes } = props;
  return (
    <>
      <Form {...formAttributes}>
        {formItemAttributes.map(i => {
          return (
            <Form.Item {...formItemAttributes}>
              {i['type'] === 'input' && <Input {...i['inputProps']} />}
              {i['type'] === 'inputPassword' && <Input.Password />}
              {i['type'] === 'inputNumber' && <InputNumber />}
              {i['type'] === 'textArea' && <Input.TextArea />}
              {i['type'] === 'search' && <Input.Search />}
              {i['type'] === 'checkbox' && <Checkbox />}
              {i['type'] === 'colorPicker' && <ColorPicker />}
              {i['type'] === 'select' && <Select />}
              {i['type'] === 'upload' && <Upload />}
              {i['type'] === 'slider' && <Slider />}
              {i['type'] === 'radio' && <Radio />}
              {i['type'] === 'switch' && <Switch />}
              {i['type'] === 'datePicker' && <DatePicker />}
            </Form.Item>
          );
        })}
      </Form>
    </>
  );
});

export default Index;
