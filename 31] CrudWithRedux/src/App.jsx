import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Component/Store'
import CrudRedux from './Component/CrudRedux'

export default function App() {
  return (
    <div>
       <Provider store={store}>
        <CrudRedux/>
      </Provider>
    </div>
  )
}
