import { Input, FormLabel, FormControl } from '@chakra-ui/react'
import { useContext } from 'react';
import { FormContext } from '../utils/FormContext';

const InputElement = ({type, label, name, required, options}) => {
  const { handleChange } = useContext(FormContext)
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} isRequired={required} onChange={e => handleChange(name, e)}/>
    </FormControl>
  )
}
export default InputElement