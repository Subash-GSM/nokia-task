export const URL = 'http://example.org/';
export const FIELD_TYPES = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
};

export const FORM_FIELDS = [
  {
    id: 'input-1',
    name: 'Text input',
    type: 'text',
    required: true,
  },
  {
    id: 'input-2',
    name: 'Number input',
    type: 'number',
    required: true,
  },
  {
    id: 'input-3',
    name: 'Select input',
    type: 'select',
    required: true,
    options: ['select-option-1', 'select-option-2', 'select-option-3'],
  },
  {
    id: 'input-4',
    name: 'Checkbox input',
    type: 'checkbox',
    required: true,
    options: ['checkbox-option-1', 'checkbox-option-2', 'checkbox-option-3'],
  },
];

export const FORM_FILEDS_VALUE = {
  'input-1': 'my-text-value',
  'input-2': '123.45',
  'input-3': 'select-option-2',
  'input-4': ['checkbox-option-1', 'checkbox-option-2'],
};
