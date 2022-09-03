import { Form } from 'react-bootstrap';

const SelectInput = (props: any) => {
  const { data, value, setFieldValue, error, required } = props;
  return (
    <>
      <Form.Group className='mb-3' controlId={data.id}>
        <Form.Label column='sm'>
          {data.name} {required && <span>*</span>}
        </Form.Label>
        <Form.Select
          name={data.id}
          onChange={(e) => setFieldValue(e.target.name, e.target.value)}
          value={value}
          isInvalid={error ? true : false}
          size='sm'
        >
          <option value=''>-- select --</option>

          {data.options?.map((option: string) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Form.Select>
        {error && (
          <Form.Control.Feedback type='invalid'>
            {JSON.stringify(error)}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};
export default SelectInput;
