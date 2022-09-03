import { actions } from './action';
import { all, takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { URL } from '../configs';

const getFormFieldsFunc = async (data) => {
  try {
    const response = await axios.get(`${URL}/form?${data.formId}`);

    return response.data;

  } catch (e) {
    throw {
      message: e.message,
    };
  }
};

export function* getFormFields(payload) {
  try {
    const response = yield call(getFormFieldsFunc, payload.data);
    yield put({
      type: actions.GET_FORM_FIELDS_SUCCESS,
      data: response,
    });
  } catch (e) {
    yield put({
      type: actions.GET_FORM_FIELDS_FAILED,
      errorMessage: e.message,
    });
    yield delay(5000);

    yield put({
      type: actions.RESET_ERROR_MESSAGE,
      errorMessage: null,
    });
  }
}

const getFormFieldsInitialValuesFunc = async (data) => {
  try {
    const response = await axios.get(`${URL}/data?${data.formId}`);

    return response.data;

  } catch (e) {
    throw {
      message: e.message,
    };
  }
};

export function* getFormFieldsInitialValues(payload) {
  try {
    const response = yield call(getFormFieldsInitialValuesFunc, payload.data);
    yield put({
      type: actions.GET_FORM_FIELDS_INITIAL_VALUES_SUCCESS,
      data: response,
    });
  } catch (e) {
    yield put({
      type: actions.GET_FORM_FIELDS_INITIAL_VALUES_FAILED,
      errorMessage: e.message,
    });
    yield delay(5000);

    yield put({
      type: actions.RESET_ERROR_MESSAGE,
      errorMessage: null,
    });
  }
}

const sendFormFieldsValuesFunc = async (data) => {
  try {
    const response = await axios.post(`${URL}/data?${data.formId}`, {
      data: data,
    });

    return response.data;
  } catch (e) {
    throw {
      message: e.message,
    };
  }
};

export function* sendFormFieldsValues(payload) {
  try {
    const response = yield call(sendFormFieldsValuesFunc, payload.data);
    yield put({
      type: actions.SEND_FORM_FIELDS_VALUES_SUCCESS,
      data: response,
      successMessage: 'Form Values updated',
    });
    yield delay(5000);

    yield put({
      type: actions.RESET_SUCCESS_MESSAGE,
      successMessage: null,
    });
  } catch (e) {
    yield put({
      type: actions.SEND_FORM_FIELDS_VALUES_FAILED,
      errorMessage: e.message,
    });

    yield delay(5000);

    yield put({
      type: actions.RESET_ERROR_MESSAGE,
      errorMessage: null,
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_FORM_FIELDS, getFormFields),
    takeEvery(
      actions.GET_FORM_FIELDS_INITIAL_VALUES,
      getFormFieldsInitialValues
    ),

    takeEvery(actions.SEND_FORM_FIELDS_VALUES, sendFormFieldsValues),
  ]);
}
