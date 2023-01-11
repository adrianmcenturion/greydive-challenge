import { Input, FormLabel, FormControl } from '@chakra-ui/react'
import { useContext } from 'react';
import { FormContext } from '../utils/FormContext';

const InputElement = ({type, label, name, required, options, value}) => {
  const { handleChange } = useContext(FormContext)
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} value={value} isRequired={required} onChange={e => handleChange(name, type, e)}/>
    </FormControl>
  )
}
export default InputElement