import { VStack } from '@chakra-ui/react'
import db from '../../utils/db.json'
import Element from './Element'
import { useEffect, useState } from 'react'
import { FormContext } from '../../utils/FormContext'

const Home = () => {

  const initValues = { full_name: "", email: "", birth_date: '', country_of_origin: '', terms_and_conditions: false };
  const [formData, setFormData] = useState(initValues)
  
    const [elements, setElements] = useState({})
    const handleChange = (name, e) => {
      const newElements = {...elements}
      newElements.items.forEach(item => {
        const { type, label, options, required } = item
        const dbName = item.name
        if (dbName === name) {
          switch (type) {
            case 'checkbox':
              item['name'] = e.target.checked;
              break;
  
            default:
              item['name'] = e.target.value;
              break;
          }
        }
      })
      console.log(newElements);
      setElements(newElements)
      
    }

    const handleSubmit = (e) => {
      e.preventDefault()
        console.log(elements)
    }

    useEffect(() => {
      setElements(db)

    }, [])

    console.log(elements)
    const { items } = elements ?? {}
    // console.log(items)
    

  return (
    <FormContext.Provider value={{ handleChange }}>
      <VStack as='form' onSubmit={handleSubmit} id='form1'>
          <div>Home</div>
          {items?.length > 0 ? items.map((item, i) => 
              <Element key={i} label={item.label} type={item.type} name={item.name} options={item.options} required={item.required} />
              ): null}
      </VStack>
    </FormContext.Provider>
  )
}
export default Home