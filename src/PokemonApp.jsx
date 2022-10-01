import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const PokemonApp = () => {

  const dispatch = useDispatch()

  useEffect(() => {

  }, [])


  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul>
    </>
  )
}