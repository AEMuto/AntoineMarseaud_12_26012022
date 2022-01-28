import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function SelectUser() {
  const [id, setId] = useState()

  function handleChange(e) {
    const { value } = e.target
    setId(value)
  }

  return (
    <form>
      <fieldset>
        <legend>Sélectionnez le profil de l'utilisateur</legend>

        <label>
          <input type="radio" name="id" value={12} onChange={handleChange} />
          Profil 1
        </label>
        <label>
          <input type="radio" name="id" value={18} onChange={handleChange} />
          Profil 2
        </label>
      </fieldset>
      {id ? (
        <button>
          <Link to={`/users/${id}`}>C'est parti !</Link>
        </button>
      ) : (
        <button disabled>C'est parti !</button>
      )}
    </form>
  )
}

export default SelectUser
