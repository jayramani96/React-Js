import { useState } from 'react'
import CrudRedux2 from './CRUDReduxes/CrudRedux2'
import { Provider } from 'react-redux'
import { store } from './CRUDReduxes/Store2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <CrudRedux2/>
      </Provider>
    </>
  )
}

export default App
