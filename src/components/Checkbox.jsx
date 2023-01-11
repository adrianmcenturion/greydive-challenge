import { Checkbox } from '@chakra-ui/react'
import { useContext } from 'react';
import { FormContext } from '../utils/FormContext';

const CheckboxInput = ({label, name, value, required, type}) => {
  const { handleChange } = useContext(FormContext)
  return (
    <Checkbox isRequired={required} colorScheme='blue' name={name} onChange={e => handleChange(name, type, e)}>{label}</Checkbox>
  );
}

export default CheckboxInput