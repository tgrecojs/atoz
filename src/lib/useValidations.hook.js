import { useState, useEffect } from 'react'
import {
  validate,
  isPresent,
  isEmail,
  initValid,
  errorsReducer,
  displayErrors,
} from './validations'

const apiCall = (data = {}) => Promise.resolve(data)

const useValidations = (validationRules = defaultValidationSpec) => {
  const [errors, setErrors] = useState(null)
  const [data, setData] = useState('')

  useEffect(() => {
    apiCall(data)
      .then(res => {
        return res
      })
      .catch(e => {
        return e
      })
  }, [data])

  const onSubmitForm = formData => {
    setErrors(null)
    return validate({ ...validationRules }, { ...formData }).fold(
      e => setErrors(e),
      x => setData(x)
    )
  }
  return {
    onSubmitForm,
    errors,
    data,
  }
}

export default useValidations
