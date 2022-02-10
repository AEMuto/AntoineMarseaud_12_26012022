import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../utils/context'

function SelectUser() {
  const { userId, setUserId } = useContext(UserContext)
  const navigate = useNavigate()

  /**
   * Each time we change the user's ID we set it in the context.
   * Albeit we lose context on page refresh, so we also store the selected
   * user's ID in the session storage to persist it.
   * See context.jsx to view how we retrieve it.
   * @param e
   */
  function handleChange(e) {
    const { value } = e.target
    setUserId(value)
    window.sessionStorage.setItem('userId', JSON.stringify(value))
  }

  function handleRoute(e) {
    e.preventDefault()
    navigate(`/users/${userId}`)
  }

  return (
    <Form>
      <Fieldset>
        <Legend>Sélectionnez un profil utilisateur</Legend>
        <Label>
          <Input
            type="radio"
            name="id"
            value={12}
            checked={userId === '12'}
            onChange={handleChange}
          />
          <LabelText>Profil 1</LabelText>
        </Label>
        <Label>
          <Input
            type="radio"
            name="id"
            value={18}
            checked={userId === '18'}
            onChange={handleChange}
          />
          <LabelText>Profil 2</LabelText>
        </Label>
        <Label>
          <Input
            type="radio"
            name="id"
            value="mock"
            checked={userId === 'mock'}
            onChange={handleChange}
          />
          <LabelText>Mock</LabelText>
        </Label>
      </Fieldset>
      {userId ? (
        <Button onClick={handleRoute}>C'est parti !</Button>
      ) : (
        <Button disabled>En attente...</Button>
      )}
    </Form>
  )
}

export default SelectUser

const Form = styled.form`
  background-color: #fbfbfb;
  border-radius: 1rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  margin: auto;
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
  border-radius: 0.5rem;
  color: white;
  &:disabled,
  &:disabled:hover {
    border: solid 1px #74798c;
    color: #74798c;
    background: none;
  }
  &:hover {
    background-color: darkcyan;
  }
`
