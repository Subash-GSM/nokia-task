import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { fireEvent } from '@testing-library/react';

const setup = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
test('renders Form ID input change', () => {
  const component = setup();

  const FormIdInput = component.getByTestId('formId');
  fireEvent.change(FormIdInput, { target: { value: '23' } });
  expect(FormIdInput.value).toBe('23');
});

test('renders Primary small size button', () => {
  const component = setup();

  const GetFieldsButton = component.getByTestId('get-fields');
  expect(GetFieldsButton.className).toBe('btn btn-primary btn-sm');
});
