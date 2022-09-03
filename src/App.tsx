import React, { useState, useEffect } from 'react';
import FormComponent from './Components/FormComponent';
import './App.css';
import {
  Card,
  Container,
  Row,
  Col,
  ToastContainer,
  Toast,
  Form,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFields, getFormFieldsInitialValues } from './Redux-Saga/action';
function App() {
  const dispatch = useDispatch();
  const [formId, setFormId] = useState('');

  const formReducerData = useSelector((state: any) => state.FormReducer);

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (formReducerData.successMessage) {
      setShowSuccessMessage(true);
    } else {
      setShowSuccessMessage(false);
    }
  }, [formReducerData.successMessage]);

  useEffect(() => {
    if (formReducerData.errorMessage) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
    }
  }, [formReducerData.errorMessage]);

  const getFormFieldsById = () => {
    dispatch(getFormFields({ formId: formId }));
    dispatch(getFormFieldsInitialValues({ formId: formId }));
  };

  return (
    <Container className='App'>
      {/* Toast Container */}
      <ToastContainer className='p-3' position={'top-end'}>
        <Toast show={showSuccessMessage} bg={'success'}>
          <Toast.Header closeButton={false}>
            <strong className='me-auto'>Notification</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>
            {formReducerData.successMessage}
          </Toast.Body>
        </Toast>

        <Toast show={showErrorMessage} bg={'danger'}>
          <Toast.Header closeButton={false}>
            <strong className='me-auto'>Error</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>
            {formReducerData.errorMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Form Container */}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Row style={{ paddingTop: '30px' }}>
              <Col className='my-1'>
                <Form.Group className='mb-3'>
                  <Form.Control
                    data-testid='formId'
                    placeholder='Enter form id'
                    size='sm'
                    value={formId}
                    onChange={(e: any) => {
                      setFormId(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs='auto' className='my-1'>
                <Button
                  size='sm'
                  onClick={getFormFieldsById}
                  type='button'
                  disabled={formId.length === 0}
                  data-testid='get-fields'
                >
                  Get Fields
                </Button>
              </Col>
            </Row>
          </Form>
          {formReducerData.formFields.length !== 0 && (
            <Card style={{ padding: '30px' }}>
              <Card.Title>Form Details</Card.Title>
              <FormComponent formId={formId} />
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
