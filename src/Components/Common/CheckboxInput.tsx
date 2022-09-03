import { Form } from 'react-bootstrap';
const CheckboxInput = (props: any) => {
  const { data, values, setFieldValue, error, required } = props;
  return (
    <>
      <Form.Group className='mb-3' controlId={data.id}>
        <Form.Label column='sm'>
          {data.name} {required && <span>*</span>}
        </Form.Label>
        {data.options?.map((option: string) => (
          <Form.Check
            type={'checkbox'}
            label={option}
            name={option}
            checked={values[data.id] ? values[data.id].includes(option) : false}
            key={option}
            isInvalid={error ? true : false}
            onChange={(e) => {
              if (e.target.checked) {
                if (Object.keys(values).includes(e.target.id)) {
                  let selectedValues: [string] = values[e.target.id];
                  selectedValues.push(e.target.name);

                  setFieldValue(e.target.id, selectedValues);
                } else {
                  let selectedValues: [string] = [e.target.name];
                  setFieldValue(e.target.id, selectedValues);
                }
              } else {
                let selectedValues: [string] = values[e.target.id].filter(
                  (opt: string) => opt !== e.target.name
                );
                setFieldValue(e.target.id, selectedValues);
              }
            }}
          ></Form.Check>
        ))}

        {error && (
          <Form.Control.Feedback type='invalid' style={{ display: 'block' }}>
            {JSON.stringify(error)}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};

export default CheckboxInput;
