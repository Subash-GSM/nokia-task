import { useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  getFormFields,
  getFormFieldsInitialValues,
  sendFormFieldValues,
} from '../Redux-Saga/action';
import { FormFields } from '../Redux-Saga/reducer';
import TextInput from './Common/TextInput';
import SelectInput from './Common/SelectInput';
import CheckboxInput from './Common/CheckboxInput';
import { FIELD_TYPES } from '../configs';

const FormComponent = (props: any) => {
  const dispatch = useDispatch();

  const formReducerData = useSelector((state: any) => state.FormReducer);

  useEffect(() => {
    dispatch(getFormFields({ formId: props.formId }));
    dispatch(getFormFieldsInitialValues({ formId: props.formId }));
  }, [props.formId]);

  return (
    <Formik
      onSubmit={(values) => {
        dispatch(sendFormFieldValues(values));
      }}
      enableReinitialize={true}
      initialValues={formReducerData.formFieldsInitialValues}
      validateOnBlur={false}
      validateOnChange={false}
      validate={(values: any) => {
        const errors: any = {};
        formReducerData.formFields.forEach((field: FormFields) => {
          if (field.required) {
            if (!values[field.id] || values[field.id].length === 0) {
              errors[field.id] = `${field.name} is required`;
            }
          }
        });
        return errors;
      }}
    >
      {({ handleSubmit, setFieldValue, values, errors, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {formReducerData.formFields.map((data: FormFields, index: number) => {
            return data.type === FIELD_TYPES.TEXT ? (
              <TextInput
                data={data}
                type={FIELD_TYPES.TEXT}
                value={values[data.id]}
                error={errors[data.id]}
                setFieldValue={setFieldValue}
                touched={touched[data.id]}
                required={data.required}
              />
            ) : data.type === FIELD_TYPES.NUMBER ? (
              <TextInput
                data={data}
                type={FIELD_TYPES.NUMBER}
                value={values[data.id]}
                error={errors[data.id]}
                setFieldValue={setFieldValue}
                required={data.required}
              />
            ) : data.type === FIELD_TYPES.SELECT ? (
              <SelectInput
                data={data}
                value={values[data.id]}
                error={errors[data.id]}
                setFieldValue={setFieldValue}
                required={data.required}
              />
            ) : data.type === FIELD_TYPES.CHECKBOX ? (
              <CheckboxInput
                data={data}
                values={values}
                setFieldValue={setFieldValue}
                error={errors[data.id]}
                required={data.required}
              />
            ) : null;
          })}
          <Button type='submit' disabled={formReducerData.loading} size='sm'>
            Submit{' '}
            {formReducerData.loading && (
              <Spinner animation='border' size='sm' />
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
