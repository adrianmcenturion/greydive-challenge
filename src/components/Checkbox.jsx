import { Checkbox } from '@chakra-ui/react'
import { useContext } from 'react';
import { FormContext } from '../utils/FormContext';

const CheckboxInput = ({label, name, required, type}) => {
  const { handleChange } = useContext(FormContext)
  return (
    <Checkbox isRequired={required} name={name} onChange={e => handleChange(name, e)}>{label}</Checkbox>
  );
}

export default CheckboxInput