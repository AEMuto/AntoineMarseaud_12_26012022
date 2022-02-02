import { useContext, useEffect, useState } from 'react'
import { useAxios } from '../services/useAxios'
import { UserContext } from '../utils/context'

function Profil() {
  const { userId } = useContext(UserContext)
  const { data, isLoading, error } = useAxios(userId)
  console.log(userId)
  return <>Coucou {data.firstName}</>
}

export default Profil
