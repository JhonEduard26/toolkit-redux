import { setPokemons, startLoading } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading())

    // TODO: realizar petición

    // dispatch(setPokemons())
  }
}