import { Button } from '@chakra-ui/react'
const SubmitButton = ({label}) => {
  return (
    <Button type='submit' colorScheme='blue' variant='solid'>{label}</Button>
  )
}
export default SubmitButton