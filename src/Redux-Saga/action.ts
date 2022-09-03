export const actions = {
  GET_FORM_FIELDS: 'GET_FORM_FIELDS',
  GET_FORM_FIELDS_SUCCESS: 'GET_FORM_FIELDS_SUCCESS',
  GET_FORM_FIELDS_FAILED: 'GET_FORM_FIELDS_FAILED',

  GET_FORM_FIELDS_INITIAL_VALUES: 'GET_FORM_FIELDS_INITIAL_VALUES',
  GET_FORM_FIELDS_INITIAL_VALUES_SUCCESS:
    'GET_FORM_FIELDS_INITIAL_VALUES_SUCCESS',
  GET_FORM_FIELDS_INITIAL_VALUES_FAILED:
    'GET_FORM_FIELDS_INITIAL_VALUES_FAILED',

  SEND_FORM_FIELDS_VALUES: 'SEND_FORM_FIELDS_VALUES',
  SEND_FORM_FIELDS_VALUES_SUCCESS: 'SEND_FORM_FIELDS_VALUES_SUCCESS',
  SEND_FORM_FIELDS_VALUES_FAILED: 'SEND_FORM_FIELDS_VALUES_FAILED',

  RESET_SUCCESS_MESSAGE: 'RESET_SUCCESS_MESSAGE',
  RESET_ERROR_MESSAGE: 'RESET_ERROR_MESSAGE',
};

const getFormFields = (payload: object) => {
  return {
    type: actions.GET_FORM_FIELDS,
    data: payload,
  };
};

const getFormFieldsInitialValues = (payload: object) => {
  return {
    type: actions.GET_FORM_FIELDS_INITIAL_VALUES,
    data: payload,
  };
};

const sendFormFieldValues = (payload: object) => {
  return {
    type: actions.SEND_FORM_FIELDS_VALUES,
    data: payload,
  };
};

export { getFormFields, getFormFieldsInitialValues, sendFormFieldValues };
