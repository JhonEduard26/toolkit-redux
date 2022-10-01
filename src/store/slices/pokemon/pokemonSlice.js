import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    }
  }
});

export const { startLoading, setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer