import { Select, FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from '../utils/FormContext';

const SelectInput = ({label, type, name, options, required}) => {
  const [country, setcountry] = useState('');
  const handleChangeCountry = () => {
    setcountry()
  }

  const { handleChange } = useContext(FormContext)

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
        <Select
          name={name}
          onChange={e => handleChange(name, type, e)}
          isRequired={required}
        >
          <option value={''} >Selecciona una opción</option>
            {options ? options?.map((option) =>
                <option key={option.value} value={option.value}>{option.label}</option>
            ) : null}
        </Select>
      </FormControl>
  );
}

export default SelectInput