import { useState, useEffect } from 'react'
import cuid from 'cuid'
import {
  isPresent,
  isEmail,
  isValidLength,
  createValidation,
} from '../../lib/validations'
import useValidations from "../../lib/useValidations.hook"

const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
}

const formStyles = {
  ...flexColumn,
  alignItems: 'center',
}

const inputStylees = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
}
const checkLength = x => x.length > 4

const Form = () => {
  const [nameInput, setName] = useState('')
  const [emailInput, setEmail] = useState('')

  const { onSubmitForm, errors, data } = useValidations({
    name: isPresent
      .concat(
        createValidation({
          rule: checkLength,
          message: 'You forgot to....ahhh friggit! I love larissa!!!!!!!!',
        })
      )
      .concat(
        createValidation({
          rule: x => x.length < 15,
          message:
            'You fuckin crazy!? Shorten that shit up right now ... or ELSE!',
        })
      ),
    email: isEmail,
  })

  const setter = set => e => {
    const { target } = e
    const { value } = target
    set(value)
  }

  const submitForm = e => {
    e.preventDefault()
    onSubmitForm({ name: nameInput, email: emailInput })
  }

  return (
    <>
      <form style={formStyles} onSubmit={submitForm}>
        <div style={inputStylees}>
          <label for="name">Username</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="larissa<3"
            onChange={setter(setName)}
          />
        </div>
        <div style={inputStylees}>
          <label for="email">Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={setter(setEmail)}
          />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
        <pre style={inputStylees}>
          {errors !== null ? (
            errors.map(x => <span key={cuid()}>{x.message}</span>)
          ) : data ? (
            <span>Success!</span>
          ) : null}
        </pre>
      </form>
    </>
  )
}

export default Form
