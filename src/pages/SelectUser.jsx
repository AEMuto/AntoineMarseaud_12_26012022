import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: #fbfbfb;
  border-radius: 1rem;
  padding: 5rem;
`

const Fieldset = styled.fieldset`
  display: flex;
  min-width: 375px;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  border: 0.2rem solid darkgray;
  border-radius: 0.5rem;
`

const Legend = styled.legend`
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0 1rem;
  color: darkgray;
`

const Input = styled.input`
  &[type='radio'] {
    margin: 0;
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset: 0;
    width: 100%;
    border: solid 1px #74798c;
    border-radius: 0.5rem;
    z-index: 1;
    &:hover {
      border: solid 1px cornflowerblue;
    }
    &:checked {
      border: none;
    }
  }
`

const Label = styled.label`
  font-size: 1.2rem;
  margin: 1rem;
  position: relative;
  z-index: 2;

  &:hover > * {
    color: cornflowerblue;
  }
`

const LabelText = styled.span`
  display: block;
  color: #74798c;
  padding: 1rem;
  border-radius: 0.5rem;
  ${Input}:checked + && {
    color: white;
    background-color: cornflowerblue;
  }
`

const Button = styled.button`
  align-self: center;
  margin-top: 5rem;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: mediumaquamarine;
  cursor: pointer;
  border-radius: 0.5rem;
  color: white;
  &:disabled,
  &:disabled:hover {
    cursor: auto;
    border: solid 1px #74798c;
    color: #74798c;
    background: none;
  }
  &:hover {
    background-color: darkcyan;
  }
`

function SelectUser() {
  const [id, setId] = useState()
  const navigate = useNavigate()

  function handleChange(e) {
    const { value } = e.target
    setId(value)
  }

  function handleRoute(e) {
    e.preventDefault()
    navigate(`/users/${id}`)
  }

  return (
    <Form>
      <Fieldset>
        <Legend>Sélectionnez un profil utilisateur</Legend>

        <Label>
          <Input type="radio" name="id" value={12} onChange={handleChange} />
          <LabelText>Profil 1</LabelText>
        </Label>
        <Label>
          <Input type="radio" name="id" value={18} onChange={handleChange} />
          <LabelText>Profil 2</LabelText>
        </Label>
      </Fieldset>
      {id ? (
        <Button onClick={handleRoute}>C'est parti !</Button>
      ) : (
        <Button disabled>En attente...</Button>
      )}
    </Form>
  )
}

export default SelectUser
