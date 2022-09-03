import { actions } from './action';

export interface FormFields {
  id: string;
  name: string;
  type: string;
  required: boolean;
  options?: [];
}

interface InitialState {
  loading: boolean;
  formFields: FormFields[];
  formFieldsInitialValues: object;
  errorMessage: string | null;
  successMessage: string | null;
}

interface Action {
  type: string;
  data?: object;
  errorMessage?: string;
  successMessage?: string;
}

const INITIAL_STATE: InitialState = {
  loading: false,
  formFields: [],
  formFieldsInitialValues: {},
  errorMessage: null,
  successMessage: null,
};

export const FormReducer = (state = INITIAL_STATE, action: Action) => {

  switch (action.type) {
    case actions.GET_FORM_FIELDS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_FORM_FIELDS_SUCCESS:
      return {
        ...state,
        formFields: action.data,
        loading: false,
      };
    case actions.GET_FORM_FIELDS_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };

    case actions.GET_FORM_FIELDS_INITIAL_VALUES:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_FORM_FIELDS_INITIAL_VALUES_SUCCESS:
      return {
        ...state,
        formFieldsInitialValues: action.data,
        loading: false,
      };
    case actions.GET_FORM_FIELDS_INITIAL_VALUES_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };

    case actions.SEND_FORM_FIELDS_VALUES:
      return {
        ...state,
        loading: true,
      };
    case actions.SEND_FORM_FIELDS_VALUES_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.successMessage,
      };
    case actions.SEND_FORM_FIELDS_VALUES_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };

    case actions.RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
      };
    case actions.RESET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: null,
      };

    default:
      return state;
  }
};
