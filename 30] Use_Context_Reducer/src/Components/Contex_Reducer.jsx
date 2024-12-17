import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Slice';

export default function Contex_Reducer() {

  const dispatch = useDispatch();

  const data = useSelector ((state) => {
    return state.Counterkey;
  });

  return (
    <div>
        <h1>Contex_Reducer</h1>
        <h2>{data.count}</h2>
        <h2>{data.num}</h2>
        <button onClick = {() => dispatch(increment())}>+</button>
        <button onClick = {() => dispatch(decrement())}>-</button>
    </div>
  )
}
