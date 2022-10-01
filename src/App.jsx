import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'

const state = state => state.counter

function App() {
  const { counter } = useSelector(state)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>count is {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementBy(10))}>
          increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
