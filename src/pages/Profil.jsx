import { useContext, useEffect, useState } from 'react'
import { useAxios } from '../services/useAxios'
import { UserContext } from '../utils/context'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Profil() {
  const { userId } = useContext(UserContext)
  const { data, isLoading, error } = useAxios(userId)
  let location = useLocation()
  console.log(location)

  return <>Coucou {data.firstName}</>
}

export default Profil
