import { Form } from 'react-bootstrap';
const TextInput = (props: any) => {
  const { data, value, type, error, setFieldValue, required } = props;
  return (
    <>
      <Form.Group className='mb-3' controlId={data.id}>
        <Form.Label column='sm'>
          {data.name} {required && <span>*</span>}
        </Form.Label>
        <Form.Control
          type={type}
          placeholder={`Enter ${data.name}`}
          name={data.id}
          value={value}
          onChange={(e) => setFieldValue(e.target.name, e.target.value)}
          isInvalid={error ? true : false}
          size='sm'
        />
        {error && (
          <Form.Control.Feedback type='invalid'>
            {JSON.stringify(error)}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};

export default TextInput;
